import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, CheckCircle } from "lucide-react";

interface BentoCardProps {
  span?: "large" | "medium";
  children: React.ReactNode;
}

function BentoCard({ children, span = "medium" }: BentoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const spanClasses = {
    large: "md:row-span-2",
    medium: "md:row-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${spanClasses[span]} relative group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full w-full rounded-[24px] bg-gradient-to-br from-[#0A0A0A] to-[#010101] border border-white/[0.05] backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          isHovered ? "border-purple-500/40 shadow-[0_0_30px_rgba(139,92,246,0.2)]" : ""
        }`}
      >
        <div
          className="absolute inset-0 rounded-[24px]"
          style={{
            boxShadow: isHovered ? "inset 0 0 20px rgba(139, 92, 246, 0.1), inset 0 0 60px rgba(59, 130, 246, 0.05)" : "inset 0 0 15px rgba(0,0,0,0.3)",
          }}
        />
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ top: "-100%" }}
            animate={isHovered ? { top: "100%" } : { top: "-100%" }}
            transition={{ duration: 3, repeat: 0, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          />
        </div>

        <div className="relative z-10 h-full w-full">{children}</div>
      </div>
    </motion.div>
  );
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-full h-full p-4 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-90"
        }`}
      >
        <div className="text-gray-600">
          <MessageCircle size={48} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-purple-500 tracking-[0.2em]">
            LOGBOOK DE SUCESSO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight bg-gradient-to-b from-white via-gray-100 to-gray-400 bg-clip-text text-transparent font-montserrat">
            Onde a estratégia encontra o resultado.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Reações reais capturadas nos bastidores da nossa operação.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <BentoCard span="large">
            <div className="h-full w-full p-6 flex flex-col">
              <ImagePlaceholder className="flex-1" />
              <div className="flex items-center gap-2 mt-3 text-green-500/80">
                <CheckCircle size={14} />
                <span className="text-xs text-gray-500 font-mono">Conversa Real</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard span="medium">
            <div className="h-full w-full p-6 flex flex-col">
              <ImagePlaceholder className="flex-1" />
              <div className="flex items-center gap-2 mt-3 text-green-500/80">
                <CheckCircle size={14} />
                <span className="text-xs text-gray-500 font-mono">Conversa Real</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard span="medium">
            <div className="h-full w-full p-6 flex flex-col">
              <ImagePlaceholder className="flex-1" />
              <div className="flex items-center gap-2 mt-3 text-green-500/80">
                <CheckCircle size={14} />
                <span className="text-xs text-gray-500 font-mono">Conversa Real</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard span="large">
            <div className="h-full w-full p-6 flex flex-col">
              <ImagePlaceholder className="flex-1" />
              <div className="flex items-center gap-2 mt-3 text-green-500/80">
                <CheckCircle size={14} />
                <span className="text-xs text-gray-500 font-mono">Conversa Real</span>
              </div>
            </div>
          </BentoCard>

          <BentoCard span="medium">
            <div className="h-full w-full p-6 flex flex-col">
              <ImagePlaceholder className="flex-1" />
              <div className="flex items-center gap-2 mt-3 text-green-500/80">
                <CheckCircle size={14} />
                <span className="text-xs text-gray-500 font-mono">Conversa Real</span>
              </div>
            </div>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}