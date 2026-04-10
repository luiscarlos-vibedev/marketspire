import { motion } from "motion/react";
import { Sparkles, Monitor, Palette, Gauge, MessageCircle } from "lucide-react";

const reasons = [
  {
    title: "Sites Responsivos",
    description:
      "Nossos sites são projetados para oferecer uma experiência de navegação perfeita em qualquer dispositivo, garantindo que seu público tenha acesso fácil e intuitivo ao seu conteúdo.",
    icon: Monitor,
  },
  {
    title: "Layout Personalizado",
    description:
      "Criamos sites únicos que refletem a identidade da sua marca, garantindo que seu negócio se destaque no mercado. Tudo isso é pensado nos mínimos detalhes, especialmente para você.",
    icon: Palette,
  },
  {
    title: "Páginas Rápidas",
    description:
      "Carregamento das páginas de forma rápida para aumentar o número de conversões, através de otimização e servidor cloud de alta performance.",
    icon: Gauge,
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-[#050029] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
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
            Escolha uma empresa que é especialista no que faz
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
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <reason.icon
                  size={28}
                  className="text-primary group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/5543996550891"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#228A09] hover:bg-[#1a6a07] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                alt="WhatsApp"
                width={24}
                height={24}
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
