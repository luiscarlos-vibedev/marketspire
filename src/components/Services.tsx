import { motion } from 'motion/react';

import { Check } from 'lucide-react';

const services = [
  {
    title: 'Site Institucional',
    description: 'Sua empresa na internet do jeito certo. Site rápido, bonito, otimizado para Google e adaptado para todos os dispositivos. Ideal para estabelecer credibilidade e gerar contatos qualificados.',
    features: [
      'SEO básico',
      'Formulário de contato',
      'Integração WhatsApp',
      'Responsivo mobile',
      'Até 7 páginas'
    ],
    icon: "https://cdn-icons-png.flaticon.com/128/17115/17115477.png",
  },
  {
    title: 'Loja Virtual',
    description: 'Seu produto vendendo na internet, 24 horas por dia, 7 dias por semana. Gestão simples, checkout seguro e experiência de compra que aumenta o ticket médio.',
    features: [
      'Catálogo ilimitado',
      'Checkout seguro',
      'Integração Pix/cartão',
      'Painel administrativo',
      'SEO para produtos'
    ],
    icon: "https://cdn-icons-png.flaticon.com/128/126/126122.png",
  },
  {
    title: 'Landing Pages',
    description: 'Uma página focada em converter visitantes em clientes ou leads. Ideal para campanhas de tráfego pago, lançamentos e promoções. Cada elemento é construído para uma única ação.',
    features: [
      'Copy persuasiva',
      'Design focado em conversão',
      'A/B test ready',
      'Integração com anúncios',
      'Gatilhos psicológicos'
    ],
    icon: "https://cdn-icons-png.flaticon.com/128/699/699931.png",
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
            Um site vai além de uma simples página na internet. Ele é a porta de entrada para o seu negócio, a vitrine que apresenta seus produtos ou serviços e a ferramenta poderosa para alcançar seus objetivos.
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
                  className="w-8 h-8 object-contain transition-all duration-300 [filter:invert(37%)_sepia(91%)_saturate(464%)_hue-rotate(61deg)_brightness(95%)_contrast(97%)] group-hover:brightness-0 group-hover:invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 font-montserrat text-[#050029]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-6">
          <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
            
          </a>
          <div className="block">
            <a
              href="https://wa.me/5543996550891"
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
