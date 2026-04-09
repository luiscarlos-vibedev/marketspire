import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050029] text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-montserrat text-primary mb-4">Marketspire</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Especialistas em criação de sites, E-commerces e Landing Pages de alta performance. Transformamos visitantes em clientes.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/marketspireoficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5543996550891" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#25d366] transition-colors text-gray-300 hover:text-white" aria-label="WhatsApp">
                <Phone size={20} />
              </a>
              <a href="mailto:contato@marketspire.com.br" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-gray-300 hover:text-white" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Site Institucional</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Loja Virtual</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Landing Pages</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Automações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-montserrat mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button type="button" onClick={() => (window as any).openPrivacyPolicy?.()} className="hover:text-primary transition-colors cursor-pointer">
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {currentYear} Marketspire. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}