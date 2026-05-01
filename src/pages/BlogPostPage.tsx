import { motion } from "motion/react";
import { ArrowLeft, Clock, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { postsData } from "../data/postsData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function BlogPostPage() {
  const { id } = useParams();
  const post = postsData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050029] text-white">
        <Header />
        <main className="pt-40 pb-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-primary hover:underline">
              Voltar para o Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050029] text-white">
      <Header />
      <main id="main-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-32 pb-24"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <Link
                to="/blog"
                className="group flex items-center gap-2 text-[#00D1FF] font-bold hover:text-white transition-colors"
              >
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>VOLTAR AO BLOG</span>
              </Link>
              <Link
                to="/"
                className="group flex items-center gap-2 text-[#00D1FF] font-bold hover:text-white transition-colors"
              >
                <Home
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                <span>INÍCIO</span>
              </Link>
            </div>

            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-6 text-gray-400 text-sm mb-6 font-mono"
              >
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-[#00D1FF]" />5 min de leitura
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black uppercase leading-[1.1] mb-8 font-montserrat tracking-tighter"
              >
                {post.title}
              </motion.h1>
            </header>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-video mb-16 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050029]/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="prose prose-invert prose-lg max-w-none 
                prose-headings:font-montserrat prose-headings:uppercase prose-headings:font-black prose-headings:tracking-tight
                prose-h2:text-3xl prose-h2:text-[#00D1FF] prose-h2:mt-12 prose-h2:mb-6
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-white prose-strong:font-bold
                prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8
                prose-li:text-gray-300 prose-li:mb-2
                prose-blockquote:border-l-4 prose-blockquote:border-[#00D1FF] prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-xl
              "
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />

            <div className="mt-20 pt-12 border-t border-white/10 text-center">
              <h3 className="text-2xl font-black uppercase mb-8 font-montserrat">
                Pronto para elevar seu nível digital?
              </h3>
              <a
                href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#228A09] hover:bg-[#1a6a07] text-white px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-xl shadow-green-900/20 uppercase tracking-wide"
              >
                Falar com um Especialista
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}