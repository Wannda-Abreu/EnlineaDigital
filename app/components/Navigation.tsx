import { motion, useScroll } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/c0706f6fe94a299091e76825ecb3c954a1a29f93.png';

const navLinks = [
  { label: 'Inicio', href: '#' },
  { label: 'Servicios', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contacto', href: '#contact' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-white/10' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="Enlinea Digital - Inicio">
            <img 
              src={logo} 
              alt="Enlinea Digital" 
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 relative group focus:outline-none focus:text-white"
                aria-label={link.label}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full group-focus:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold hover:scale-105 focus:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Empezar proyecto"
            >
              Empezar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden glass border-t border-white/10"
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white/80 hover:text-white transition-colors duration-300 focus:outline-none focus:text-white focus:pl-2"
              aria-label={link.label}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Empezar proyecto"
          >
            Empezar
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}