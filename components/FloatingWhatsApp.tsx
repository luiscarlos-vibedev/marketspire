import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20b858] text-white p-4 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Falar conosco no WhatsApp"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="w-8 h-8 object-contain brightness-0 invert"
        referrerPolicy="no-referrer"
      />
      
      {/* Tooltip Hover */}
      <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 bg-white text-[#050029] px-4 py-2 rounded-lg shadow-lg font-semibold text-sm whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
        Fale conosco pelo WhatsApp!
        {/* Seta do tooltip */}
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
      </div>
    </motion.a>
  );
}