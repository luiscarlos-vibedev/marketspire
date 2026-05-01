import { motion } from "motion/react";
import { Sparkles, Search, TrendingUp, Shield } from "lucide-react";

const reasons = [
  {
    title: "Seja encontrado",
    description:
      "Sites otimizados para SEO aparecem nas primeiras posições do Google. E 97% das pessoas nunca passam da primeira página.",
    footer: "97% DAS BUSCAS TERMINAM NA 1ª PÁGINA DO GOOGLE — VOCÊ PRECISA ESTAR LÁ.",
    icon: Search,
  },
  {
    title: "Venda mais",
    description:
      "Um site estratégico com copy de conversão, CTAs bem posicionados e prova social pode aumentar a geração de leads em 3x sem aumentar o tráfego.",
    footer: "CLIENTES RELATAM ATÉ 3X MAIS CONTATOS APÓS TROCAR O SITE ANTIGO PELO NOSSO.",
    icon: TrendingUp,
  },
  {
    title: "Credibilidade instantânea",
    description:
      "Visitantes levam apenas 0,05 segundos para formar uma opinião sobre um site. Um design profissional e rápido cria confiança antes mesmo de ler uma palavra.",
    footer: "0,05 SEGUNDOS — É O TEMPO QUE UM VISITANTE LEVA PARA JULGAR SEU SITE.",
    icon: Shield,
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#050029] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 font-montserrat"
          >
            PORQUE NOS ESCOLHER PARA CRIAR O SEU{" "}
            <span className="text-primary">SITE PROFISSIONAL</span> ?
          </motion.h2>
          <div className="inline-flex items-center gap-2 text-primary/80 font-medium">
            <Sparkles size={18} />
            Não são promessas. São os resultados que nossos clientes já experimentaram.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-3xl bg-[#0a063b] border border-white/5 flex flex-col items-center text-center group h-full"
            >
              <div className="w-16 h-16 bg-[#120d52] rounded-2xl flex items-center justify-center mb-8">
                <reason.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-6 font-montserrat">{reason.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 flex-grow">{reason.description}</p>
              
              <div className="pt-8 border-t border-white/10 w-full">
                <p className="text-[#228A09] font-bold text-xs md:text-sm tracking-wider leading-tight">
                  {reason.footer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/5543996550891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#228A09] hover:bg-[#1a6a07] text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-green-900/40"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                alt="WhatsApp"
                className="w-6 h-6 object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              QUERO PEDIR UM ORÇAMENTO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}