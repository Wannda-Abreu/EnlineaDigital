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
    description: 'Sitios web modernos, responsivos y optimizados para conversión',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Palette,
    title: 'Branding Digital',
    description: 'Identidad visual única que conecta con tu audiencia',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Share2,
    title: 'Redes Sociales',
    description: 'Gestión y estrategia para maximizar tu alcance social',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Image,
    title: 'Diseño de Contenido',
    description: 'Contenido visual que cuenta la historia de tu marca',
    color: 'from-blue-500 to-violet-500'
  },
  {
    icon: Zap,
    title: 'Automatización',
    description: 'Procesos inteligentes que ahorran tiempo y recursos',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: FileText,
    title: 'Landing Pages',
    description: 'Páginas de alta conversión para tus campañas',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description: 'Tiendas online completas y seguras para vender más',
    color: 'from-violet-500 to-pink-500'
  },
  {
    icon: Search,
    title: 'SEO Local',
    description: 'Posicionamiento en Google para tu mercado objetivo',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Target,
    title: 'Estrategia Digital',
    description: 'Plan integral para alcanzar tus objetivos de negocio',
    color: 'from-pink-500 to-purple-500'
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Soluciones completas para llevar tu negocio al mundo digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />
              
              <div className="relative card-glow-hover bg-slate-950/50 p-8 rounded-2xl h-full backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow-blue transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-violet-400 transition-colors duration-300">
                  <span className="text-sm font-semibold">Saber más</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
