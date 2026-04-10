import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Layout, 
  Palette, 
  Share2, 
  Image, 
  Zap, 
  FileText, 
  ShoppingCart, 
  Search, 
  Target 
} from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: 'Diseño Web',
    description: 'Sitios web modernos, responsivos y optimizados para conversión'
  },
  {
    icon: Palette,
    title: 'Branding Digital',
    description: 'Identidad visual única que conecta con tu audiencia'
  },
  {
    icon: Share2,
    title: 'Redes Sociales',
    description: 'Gestión y estrategia para maximizar tu alcance social'
  },
  {
    icon: Image,
    title: 'Diseño de Contenido',
    description: 'Contenido visual que cuenta la historia de tu marca'
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Procesos inteligentes que ahorran tiempo y recursos'
  },
  {
    icon: FileText,
    title: 'Landing Pages',
    description: 'Páginas de alta conversión para tus campañas'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online completas y seguras para vender más'
  },
  {
    icon: Search,
    title: 'SEO Local',
    description: 'Posicionamiento en Google para tu mercado objetivo'
  },
  {
    icon: Target,
    title: 'Estrategia Digital',
    description: 'Plan integral para alcanzar tus objetivos de negocio'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales para potenciar tu presencia digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full hover:shadow-lg">
                <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
