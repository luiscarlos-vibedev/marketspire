import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { Gauge, ShieldCheck } from 'lucide-react';

type FormData = {
  name: string;
  phone: string;
  service: string;
  niche?: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <section id="contato" className="py-20 bg-[#050029] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-montserrat leading-tight uppercase">
                PRONTO PARA TER UM <br /> SITE QUE REALMENTE <br /> VENDE?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Dê o próximo passo agora. Nossa equipe entra em contato em até 2 horas durante o horário comercial.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-[#0a063b] border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Gauge size={24} />
                  <h3 className="font-bold text-lg uppercase tracking-wider">ATENDIMENTO ÁGIL</h3>
                </div>
                <p className="text-xs md:text-sm font-bold text-gray-400 tracking-wide leading-relaxed uppercase">
                  ⚡ ATENDEMOS NO MÁXIMO 6 PROJETOS SIMULTÂNEOS PARA GARANTIR QUALIDADE TOTAL. VERIFIQUE A DISPONIBILIDADE DE VAGAS ANTES DE SOLICITAR.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0a063b] border border-white/5 space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <ShieldCheck size={24} />
                  <h3 className="font-bold text-lg uppercase tracking-wider text-primary">GARANTIA DE SATISFAÇÃO</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Se após a entrega você não estiver satisfeito com o resultado, revisamos sem custo adicional até você aprovar. Simples assim. Seu investimento está protegido.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a063b] p-10 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-10 font-montserrat uppercase tracking-tight">PREENCHER FORMULÁRIO</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] text-gray-400">NOME COMPLETO</label>
                  <input
                    {...register('name', { required: true })}
                    placeholder="Ex: João Silva"
                    className="w-full bg-[#120d52] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-gray-600"
                  />
                  {errors.name && <span className="text-red-500 text-[10px] mt-1 font-bold">CAMPO OBRIGATÓRIO</span>}
                </div>

                <div>
                  <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] text-gray-400">WHATSAPP COM DDD</label>
                  <input
                    {...register('phone', { required: true })}
                    placeholder="(00) 00000-0000"
                    className="w-full bg-[#120d52] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-gray-600"
                  />
                  {errors.phone && <span className="text-red-500 text-[10px] mt-1 font-bold">CAMPO OBRIGATÓRIO</span>}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] text-gray-400">TIPO DE PROJETO</label>
                <select
                  {...register('service', { required: true })}
                  className="w-full bg-[#120d52] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all text-gray-300 appearance-none cursor-pointer"
                >
                  <option value="">Escolha uma opção</option>
                  <option value="Site Institucional">Site Institucional</option>
                  <option value="Loja Virtual">Loja Virtual</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Outros">Outros</option>
                </select>
                {errors.service && <span className="text-red-500 text-[10px] mt-1 font-bold">CAMPO OBRIGATÓRIO</span>}
              </div>

              <div>
                <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] text-gray-400">NICHO DO NEGÓCIO (OPCIONAL)</label>
                <input
                  {...register('niche')}
                  placeholder="Ex: Clínica Odontológica, Advocacia..."
                  className="w-full bg-[#120d52] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] text-gray-400">CONTE UM POUCO SOBRE SEU PROJETO</label>
                <textarea
                  {...register('message', { required: true })}
                  rows={4}
                  placeholder="Ex: Preciso de um site que apareça no Google..."
                  className="w-full bg-[#120d52] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-all resize-none placeholder:text-gray-600"
                />
                {errors.message && <span className="text-red-500 text-[10px] mt-1 font-bold">CAMPO OBRIGATÓRIO</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#228A09] hover:bg-[#1a6a07] text-white font-black py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-green-900/20 uppercase tracking-widest text-sm"
              >
                ENVIAR E RECEBER ORÇAMENTO GRATUITO
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}