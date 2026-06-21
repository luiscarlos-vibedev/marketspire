import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function PrivacyPolicy() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    (window as any).openPrivacyPolicy = () => setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden relative">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold font-montserrat text-[#050029]">Política de Privacidade</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Fechar Política de Privacidade" className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-gray-700">
          <p>A <strong>Marketspire</strong> leva a sua privacidade muito a sério. Esta Política descreve como coletamos, usamos e protegemos os seus dados pessoais (Lei Geral de Proteção de Dados Pessoais - LGPD, Lei nº 13.709/2018).</p>

          <h3 className="text-lg font-bold text-[#050029]">1. Quais dados são coletados</h3>
          <p>Coletamos os seguintes dados informados diretamente por você via formulário: <strong>Nome, E-mail e Telefone (WhatsApp)</strong>.</p>

          <h3 className="text-lg font-bold text-[#050029]">2. Finalidade do uso</h3>
          <p>Os seus dados são utilizados exclusivamente para as seguintes finalidades:</p>
          <ul className="list-disc pl-5">
            <li>Entrar em contato para fornecer o orçamento e respostas de dúvidas;</li>
            <li>Possível envio de propostas comerciais de serviços de desenvolvimento de software e marketing pela Marketspire.</li>
          </ul>

          <h3 className="text-lg font-bold text-[#050029]">3. Prazo de retenção</h3>
          <p>Reteremos os seus dados pelo tempo necessário para atingir as finalidades descritas ou até que você solicite a exclusão de seus dados da nossa base.</p>

          <h3 className="text-lg font-bold text-[#050029]">4. Compartilhamento de Dados</h3>
          <p>Os dados são processados por infraestruturas de parceiros de tecnologia exigidos para a operação do site, de forma totalmente segura (como Vercel e o sistema de disparo de envios transacionais Resend). Não vendemos seus dados informados comercialmente.</p>

          <h3 className="text-lg font-bold text-[#050029]">5. Direitos do titular</h3>
          <p>Você tem o direito de solicitar o acesso, retificação, portabilidade ou a eliminação dos seus dados a qualquer momento.</p>

          <h3 className="text-lg font-bold text-[#050029]">6. Como exercer os direitos (Contato DPO)</h3>
          <p>Para interagir conosco sobre a privacidade de seus dados, envie um e-mail para: <strong>luiscarlosdossantos883@gmail.com</strong>.</p>
        </div>

        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button onClick={() => setIsOpen(false)} type="button" className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Ciente e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}