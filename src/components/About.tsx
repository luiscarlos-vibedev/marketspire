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
            <h2 className="text-4xl font-bold text-white mb-6 font-montserrat">
              Sobre Nós
            </h2>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles size={16} />
              Seu parceiro para uma presença digital de sucesso!
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Na <span className="text-primary font-bold">MarketSpire</span>{" "}
                acreditamos que um site é muito mais do que apenas uma página na
                web. É a porta de entrada para o seu negócio, a primeira
                impressão que você causa em seus clientes potenciais e a base
                para construir relacionamentos duradouros.
              </p>
              <p>
                Com uma equipe experiente e criativa, usamos as últimas
                tendências em design e desenvolvimento para criar sites
                personalizados que atendem às suas necessidades e objetivos
                específicos. Trabalhamos em estreita colaboração com você para
                entender sua visão e garantir que seu site seja um reflexo fiel
                de sua marca.
              </p>
              <p className="text-white font-bold">
                Estamos prontos para ajudá-lo a criar um site que você ame.
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
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXF1aXBlfGVufDB8MXwwfHx8MA%3D%3D"
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
