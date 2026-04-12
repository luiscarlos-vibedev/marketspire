import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aline Morais",
    text: "Não tenho dúvida de que fiz a melhor escolha. Com tanta opção no mercado, bastou comparar o trabalho e o atendimento da MarketSpire pra encontrar exatamente o que eu procurava, que era qualidade e preço justo.",
    rating: 5,
    image: "/portfolio/Aline Morais.webp",
  },
  {
    name: "Marcelo Hayeck",
    text: "Luis é um ótimo profissional e impecável na execução do trabalho! Recomendo!",
    rating: 5,
    image: "/portfolio/Marcelo Hayeck.webp",
  },
  {
    name: "Giselda Ribeiro",
    text: "Eu amei o meu site, profissional e dentro do prazo! Indico muito, excelente profissionais! Obrigada!",
    rating: 5,
    image: "/portfolio/Giselda Ribeiro.webp",
  },
  {
    name: "Maria Oliveira",
    text: "Muito profissional 👏🏼👏🏼 site ficou incrível, o design ficou lindo e harmônicos, sem falar que consegui ficar em primeira no google!",
    rating: 5,
    image: "/portfolio/Maria Oliveira.webp",
  },
  {
    name: "Luana Almeida",
    text: "Tive a sorte de encontrar a MarketSpire! Desde o primeiro contato, o atendimento foi excepcional, me guiando em cada etapa da criação dos meus dois sites.",
    rating: 5,
    image: "/portfolio/Luana Almeida.webp",
  },
  {
    name: "Pedro Santos",
    text: "Excelente profissional, ótima dedicação e atendimento ao cliente, entregou o projeto na data prevista.",
    rating: 5,
    image: "/portfolio/Pedro Santos.webp",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50 text-[#050029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-montserrat"
          >
            Depoimentos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            O que estão falando da nossa criação de sites?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-md transition-all"
            >
              <Quote
                className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors"
                size={40}
              />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover shadow-sm"
                />
                <div>
                  <h3 className="font-bold text-[#050029]">{review.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
