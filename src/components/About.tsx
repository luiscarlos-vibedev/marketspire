import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobrenos"
      className="py-16 bg-[#050029] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat leading-tight">Quem está por trás dos seus resultados</h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles size={16} />
              Transformando cliques em faturamento real.
            </div>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                A <span className="text-primary font-bold">Marketspire</span> nasceu porque Henry Thiago percebeu um problema recorrente: pequenos e médios empresários investiam em sites caros que não apareciam no Google, não carregavam rápido no celular e — pior de tudo — não geravam nenhum resultado real.
              </p>
              <p>
                Nossa abordagem é diferente desde o início. Antes de criar qualquer página, entendemos o seu negócio, seu público e seus objetivos. Só depois colocamos a mão na massa — porque um site sem estratégia é apenas um custo, não um investimento.
              </p>
              <p className="text-white font-bold">
                Cada projeto que entregamos tem o nosso comprometimento total com resultado. Não somos uma fábrica de sites em série. Somos parceiros do seu crescimento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src="https://i.postimg.cc/BZN6gYR7/Design-sem-nome-(1).webp"
                alt="Equipe MarketSpire"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
