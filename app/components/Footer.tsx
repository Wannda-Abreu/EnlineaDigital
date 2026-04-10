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
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
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
                  className="h-8 w-auto"
                />
              </a>
              <p className="text-gray-400 mb-6 max-w-sm">
                Soluciones digitales que transforman empresas con diseño elegante y tecnología moderna.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:info@enlineadigital.com" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Enviar email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm">info@enlineadigital.com</span>
                </a>
                <a 
                  href="tel:+18091234567" 
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Llamar"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm">+1 (809) 123-4567</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">Santo Domingo, RD</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    <social.icon className="w-4 h-4" />
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
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
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
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2026 Enlinea Digital. Todos los derechos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span>Hecho en República Dominicana</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );