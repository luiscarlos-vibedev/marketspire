import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, MessageCircle, Music2 } from "lucide-react";

interface HeaderProps {
  onNavigate?: (href: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Nossas Soluções", href: "#solucoes" },
    { name: "Sobre Nós", href: "#sobrenos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050029] py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, "#inicio")}
            className="flex items-center gap-2"
          >
            <img
              src="https://i.imgur.com/ouANJf0.png"
              alt="MarketSpire Logo"
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white hover:text-primary transition-all font-medium text-sm uppercase tracking-wider hover:underline hover:decoration-1 underline-offset-4"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/marketspireoficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-primary transition-colors"
          >
            <Instagram size={28} />
          </a>
          <a
            href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-primary transition-colors"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
              alt="WhatsApp"
              className="w-7 h-7 object-contain brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050029] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-3 py-4 text-base font-medium text-white hover:bg-white/5 hover:text-primary rounded-md transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center space-x-6 px-3 py-4 border-t border-white/10 mt-4">
                <a
                  href="https://www.instagram.com/marketspireoficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/5543996550891?text=Quero%20um%20site%20que%20vende%20por%20mim!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png"
                    alt="WhatsApp"
                    className="w-6 h-6 object-contain brightness-0 invert"
                    referrerPolicy="no-referrer"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
