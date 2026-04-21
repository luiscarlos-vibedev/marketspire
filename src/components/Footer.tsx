import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050029] border-t border-white/10 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="space-y-6">
            <img 
              src="/logo-marketspire.webp" 
              alt="Marketspire" 
              className="h-16 w-auto" 
              loading="lazy"
            />
            <p className="text-gray-400 leading-relaxed">
              Especialistas em criação de sites, E-commerces e Landing Pages de alta performance. Transformamos visitantes em clientes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/marketspireoficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/5543996550891" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#228A09] transition-all group">
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain brightness-0 invert" 
                  referrerPolicy="no-referrer" 
                />
              </a>
              <a href="mailto:contato@marketspire.com.br" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-all group">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-montserrat uppercase tracking-wider">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <img 
                  src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" 
                  alt="WhatsApp" 
                  className="w-[18px] h-[18px] object-contain brightness-0 invert opacity-70" 
                  referrerPolicy="no-referrer" 
                />
                <span>(43) 9 9655-0891</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>(43) 9 9655-0891</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>contato@marketspire.com.br</span>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-montserrat uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Site Institucional</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Loja Virtual</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Automações</a></li>
            </ul>
          </div>

          {/* Política de Privacidade */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold font-montserrat uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <button type="button" onClick={() => (window as any).openPrivacyPolicy?.()} className="hover:text-primary transition-colors cursor-pointer text-left">
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {currentYear} Marketspire. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}