import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
    { name: "Serviços", href: "#solucoes" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contato", href: "#contato" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/blog")) {
      setIsMobileMenuOpen(false);
      return;
    }
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-all duration-300 overflow-hidden ${
        isScrolled ? "bg-[#050029] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <div className="flex items-center h-full">
          <Link
            to="/"
            className="flex items-center gap-2 h-full"
          >
            <img
              src="/logo-marketspire.webp"
              alt="MarketSpire Logo"
              className="h-20 w-auto object-contain"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) =>
            link.href.startsWith("/blog") ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-white hover:text-primary transition-all font-medium text-sm uppercase tracking-wider hover:underline hover:decoration-1 underline-offset-4"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white hover:text-primary transition-all font-medium text-sm uppercase tracking-wider hover:underline hover:decoration-1 underline-offset-4"
              >
                {link.name}
              </a>
            )
          )}
          <a
            href="https://wa.me/5543996550891?text=Quero%20meu%20site!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#228A09] hover:bg-[#1a6a07] text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
          >
            QUERO MEU SITE
          </a>
        </nav>

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
              {navLinks.map((link) =>
                link.href.startsWith("/blog") ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-white hover:bg-white/5 hover:text-primary rounded-md transition-all"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="block px-3 py-4 text-base font-medium text-white hover:bg-white/5 hover:text-primary rounded-md transition-all"
                  >
                    {link.name}
                  </a>
                )
              )}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
