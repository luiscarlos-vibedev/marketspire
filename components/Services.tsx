import { motion } from "motion/react";

const services = [
  {
    title: "Site Institucional",
    description:
      "Apresente sua empresa, serviços e produtos, permita que seu público te encontre facilmente na internet.",
    icon: "https://cdn-icons-png.flaticon.com/128/17115/17115477.png",
  },
  {
    title: "Loja Virtual",
    description:
      "Permita que seus clientes comprem seus produtos de onde estiverem, a qualquer hora do dia.",
    icon: "https://cdn-icons-png.flaticon.com/128/126/126122.png",
  },
  {
    title: "Landing Pages",
    description:
      "Capture dados de leads potenciais, aumente suas vendas e melhore o ROI das suas campanhas de marketing.",
    icon: "https://cdn-icons-png.flaticon.com/128/699/699931.png",
  },
  {
    title: "Portais de Notícia",
    description:
      "Portais de notícias dinâmicos e informativos, com recursos avançados de pesquisa e categorização.",
    icon: "https://cdn-icons-png.flaticon.com/128/81/81460.png",
  },
  {
    title: "Site de Imobiliária",
    description:
      "Aumente sua visibilidade online e seja encontrado por quem busca imóveis na sua região.",
    icon: "https://cdn-icons-png.flaticon.com/128/2550/2550264.png",
  },
  {
    title: "Site Personalizado",
    description:
      "Desenvolva soluções únicas para atender às suas necessidades específicas com design profissional e intuitivo.",
    icon: "https://cdn-icons-png.flaticon.com/128/1927/1927656.png",
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="py-16 bg-white text-[#050029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-montserrat"
          >
            O que fazemos?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Um site vai além de uma simples página na internet. Ele é a porta de
            entrada para o seu negócio, a vitrine que apresenta seus produtos ou
            serviços e a ferramenta poderosa para alcançar seus objetivos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all group bg-gray-50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <img
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain transition-all duration-300 [filter:invert(37%)_sepia(91%)_saturate(464%)_hue-rotate(61deg)_brightness(95%)_contrast(97%)] group-hover:brightness-0 group-hover:invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat text-[#050029]">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          ></a>
          <div className="block">
            <a
              href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                alt="WhatsApp"
                className="w-6 h-6 object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              Quero Fazer Meu Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
