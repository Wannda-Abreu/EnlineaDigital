import { motion } from 'motion/react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';
import logo from 'figma:asset/c0706f6fe94a299091e76825ecb3c954a1a29f93.png';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

const footerLinks = {
  Servicios: [
    'Diseño Web',
    'Branding Digital',
    'Redes Sociales',
    'E-commerce',
    'SEO Local'
  ],
  Empresa: [
    'Sobre Nosotros',
    'Portfolio',
    'Proceso',
    'Blog',
    'Contacto'
  ],
  Legal: [
    'Términos de Servicio',
    'Política de Privacidad',
    'Cookies',
    'Contratos'
  ]
};

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" aria-hidden="true" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="inline-block mb-4" aria-label="Enlinea Digital - Inicio">
                <img 
                  src={logo} 
                  alt="Enlinea Digital" 
                  className="h-10 w-auto"
                />
              </a>
              <p className="text-white/70 mb-6 max-w-sm">
                Transformando empresas dominicanas con soluciones digitales premium y tecnología de vanguardia.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:info@enlineadigital.com" 
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-colors duration-300 focus:text-blue-400 focus:outline-none"
                  aria-label="Enviar email a info@enlineadigital.com"
                >
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <span>info@enlineadigital.com</span>
                </a>
                <a 
                  href="tel:+18091234567" 
                  className="flex items-center gap-3 text-white/70 hover:text-blue-400 transition-colors duration-300 focus:text-blue-400 focus:outline-none"
                  aria-label="Llamar al +1 809 123 4567"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>+1 (809) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span>Santo Domingo, República Dominicana</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4" role="list" aria-label="Redes sociales">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Visitar ${social.label}`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 focus:border-blue-500 focus:bg-blue-500/10 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <social.icon className="w-5 h-5 text-white/70 group-hover:text-blue-400 group-focus:text-blue-400 transition-colors duration-300" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-blue-400 focus:text-blue-400 transition-colors duration-300 text-sm focus:outline-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/50 text-sm"
            >
              © 2026 Enlinea Digital. Todos los derechos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-white/50 text-sm"
            >
              <span>Hecho con</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-pink-500"
                aria-label="amor"
              >
                ♥
              </motion.span>
              <span>en República Dominicana</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}