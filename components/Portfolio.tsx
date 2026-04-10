import { motion } from "motion/react";
import { Sparkles, ExternalLink, MessageCircle } from "lucide-react";

const projects = [
  {
    title: "Morgana Nutri",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2025/06/screencapture-morgananutri-2025-06-20-19_30_01-1.png",
    url: "https://morgananutri.com/",
  },
  {
    title: "Anastasia Estética",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-ds-1.png",
    url: "https://anastasiaestetica.com.br/",
  },
  {
    title: "Tráfego Supremo",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-ds-4.png",
    url: "https://trafegosupremo.com.br/",
  },
  {
    title: "Tecudi",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-ds-3.png",
    url: "https://tecudi.com/",
  },
  {
    title: "Helio Psi",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/07/helio-psi.png",
    url: "http://heliopsi.com/",
  },
  {
    title: "Modas Glow",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/07/modasglow.png",
    url: "http://modasglow.com/",
  },
  {
    title: "Curso Nail Pro",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-dssites-7.png",
    url: "https://cursonailpro.com.br/",
  },
  {
    title: "Zeus Advogados",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-ds-5.png",
    url: "https://zeusadvogados.com.br/",
  },
  {
    title: "Amorel Joias",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-dssites-3.png",
    url: "https://amoreljoias.com.br/",
  },
  {
    title: "Lemon Shopp",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-dssites-9.png",
    url: "https://lemonshopp.com/",
  },
  {
    title: "Portal UDI",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-dssites-11.png",
    url: "https://portaludi.com.br/",
  },
  {
    title: "Ky Delícia",
    image:
      "https://mmcriativeagencia.com/wp-content/uploads/2024/05/sites-dssites-12.png",
    url: "https://kydelicia.com.br/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-white text-[#050029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-montserrat"
          >
            Nosso Portfólio
          </motion.h2>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Sparkles size={18} />
            Conheça alguns sites profissionais que já criamos
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={360}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex justify-between items-center bg-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 flex items-center gap-1 font-semibold text-sm uppercase tracking-wider"
                >
                  Ver Projeto
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
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
