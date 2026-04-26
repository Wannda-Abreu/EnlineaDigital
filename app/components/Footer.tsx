import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enlinea Digital</h3>
            <p className="text-gray-500 text-sm">Soluciones digitales simples y efectivas</p>
          </div>

          {/* Center - Email */}
          <a 
            href="mailto:info@enlineadigital.com" 
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm">info@enlineadigital.com</span>
          </a>

          {/* Right - Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
            <p>© 2026 Enlinea Digital. Todos los derechos reservados.</p>
            <p>Hecho en República Dominicana 🇩🇴</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
      </div>
    </footer>
  );