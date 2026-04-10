import { motion } from "motion/react";
import {
  Search,
  TrendingUp,
  ShieldCheck,
  Megaphone,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Seja encontrado",
    description:
      "Crie sua empresa online e mostre seus produtos e serviços para o mundo, 24/7.",
    icon: Search,
  },
  {
    title: "Venda mais",
    description:
      "Ofereça seus produtos ou serviços online e facilite a compra para seus clientes.",
    icon: TrendingUp,
  },
  {
    title: "Credibilidade instantânea",
    description:
      "Ganhe a confiança dos clientes com um site profissional que mostre a seriedade do seu negócio.",
    icon: ShieldCheck,
  },
  {
    title: "Marketing imbatível",
    description:
      "Atraia novos clientes e fidelize os existentes com ferramentas poderosas e personalizadas.",
    icon: Megaphone,
  },
  {
    title: "Venda sem parar",
    description:
      "Seu site trabalha para você 24 horas por dia, 7 dias por semana, mesmo quando você está dormindo.",
    icon: Clock,
  },
  {
    title: "Fique à frente",
    description:
      "Seja competitivo e supere seus concorrentes com um site moderno e eficiente.",
    icon: Award,
  },
];

export default function Benefits() {
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
            COMO UM SITE <span className="text-primary">PROFISSIONAL</span>{" "}
            AJUDA SEU NEGÓCIO?
          </motion.h2>
          <div className="inline-flex items-center gap-2 text-primary/80 font-medium">
            <Sparkles size={18} />6 Razões pelas quais um site é essencial para
            o seu negócio
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:border-primary transition-all duration-300">
                <div className="text-primary font-bold text-3xl">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
