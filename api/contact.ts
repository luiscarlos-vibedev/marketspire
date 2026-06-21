import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sanitize = (str: string) => 
  str ? str.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email, service, message, _honeypot } = req.body;

  // Anti-bot Honeypot Check
  if (_honeypot) {
    // Se o campo invisível foi preenchido, é bot. Ignoramos silenciosamente.
    return res.status(200).json({ success: true, message: 'Spam ignorado com sucesso' });
  }

  // Server-side validation
  if (!name || !phone || !email || !service || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Marketspire <onboarding@resend.dev>', // Pode requerer verificação de DNS no painel do Resend
      to: ['luiscarlosdossantos883@gmail.com'], // O email fornecido para recebimento
      subject: `Novo Lead: ${sanitize(name)} (${sanitize(service)})`,
      html: `
        <h2>Novo contato pelo site!</h2>
        <p><strong>Nome:</strong> ${sanitize(name)}</p>
        <p><strong>E-mail:</strong> ${sanitize(email)}</p>
        <p><strong>Telefone/WhatsApp:</strong> ${sanitize(phone)}</p>
        <p><strong>Serviço Desejado:</strong> ${sanitize(service)}</p>
        <br/>
        <p><strong>Mensagem:</strong></p>
        <p>${sanitize(message)}</p>
      `,
    });

    if (data.error) {
      console.error('Erro no resend:', data.error);
      return res.status(500).json({ error: 'Erro ao enviar a mensagem. Tente novamente mais tarde.' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro desconhecido:', error);
    return res.status(500).json({ error: 'Erro de servidor interno.' });
  }}
