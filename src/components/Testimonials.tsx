import { motion } from 'motion/react';

const testimonials = [
  { id: 1, image: 'https://i.postimg.cc/vBPK82YY/1.webp' },
  { id: 3, image: 'https://i.postimg.cc/QC20VRRM/3.webp' },
  { id: 4, image: 'https://i.postimg.cc/bwTWFw7w/4.webp' },
  { id: 5, image: 'https://i.postimg.cc/xCbsYf4C/5.webp' },
  { id: 6, image: 'https://i.postimg.cc/G3xfp2pX/Design-sem-nome-(1)-(1).webp' },
];

const carouselItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 font-montserrat text-[#050029] uppercase tracking-tight"
        >
          DEPOIMENTOS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600"
        >
          O que estão falando da nossa criação de sites?
        </motion.p>
      </div>

      <div className="relative flex whitespace-nowrap">
        <div className="flex animate-scroll hover:[animation-play-state:paused] gap-10">
          {carouselItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] md:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#228A09]/60 shadow-[0_0_15px_rgba(34,138,9,0.1)] flex-shrink-0 relative bg-[#0a063b]"
            >
              <img
                src={item.image}
                alt={`Depoimento ${item.id}`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050029]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50% - 20px)); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}} />
    </section>
  );
}
