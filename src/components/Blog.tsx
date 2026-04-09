import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { postsData } from "../data/postsData";

interface BlogProps {
  onPostClick?: (id: string) => void;
}

export default function Blog({ onPostClick }: BlogProps) {
  return (
    <section id="blog" className="pt-24 pb-12 bg-white text-[#050029]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-montserrat"
          >
            NOSSO <span className="text-primary">BLOG</span>
          </motion.h2>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            <Sparkles size={18} />
            Nossas dicas para o seu Sucesso Online!
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {postsData.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => onPostClick?.(post.id)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link">
                  Leia Mais
                  <ArrowRight
                    size={16}
                    className="group-hover/link:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
