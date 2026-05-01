import { motion } from "motion/react";
import { Sparkles, ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { postsData } from "../data/postsData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-12 bg-white text-[#050029]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-[#050029] transition-colors font-medium text-sm uppercase tracking-wider"
          >
            <Home size={18} />
            Voltar ao Início
          </Link>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 font-montserrat"
            >
              NOSSO <span className="text-primary">BLOG</span>
            </motion.h1>
            <div className="inline-flex items-center gap-2 text-primary font-medium">
              <Sparkles size={18} />
              Dicas sobre tecnologia, marketing digital e muito mais!
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postsData.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="font-bold text-lg mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link">
                      Leia Mais
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}