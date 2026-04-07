import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '+300%',
    label: 'Incremento Promedio en Conversiones',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    value: '50K+',
    label: 'Usuarios Impactados',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Award,
    value: '100+',
    label: 'Proyectos Exitosos',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Soporte y Monitoreo',
    color: 'from-emerald-500 to-teal-500'
  }
];

const testimonials = [
  {
    name: 'María Rodríguez',
    position: 'CEO, Fashion Store RD',
    text: 'Enlinea Digital transformó completamente nuestra presencia online. Las ventas aumentaron 250% en solo 3 meses.',
    rating: 5
  },
  {
    name: 'Carlos Méndez',
    position: 'Director, Tech Solutions',
    text: 'Un equipo increíblemente profesional. Entendieron nuestra visión y la llevaron al siguiente nivel.',
    rating: 5
  },
  {
    name: 'Ana Pérez',
    position: 'Founder, Healthy Life',
    text: 'La mejor inversión que hicimos para nuestro negocio. El ROI fue evidente desde el primer mes.',
    rating: 5
  }
];

export function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="gradient-text">Resultados</span> Reales
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Números que hablan por sí solos
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              <div className="text-5xl font-bold gradient-text mb-3">
                {stat.value}
              </div>

              <div className="text-white/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative glass p-8 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-white/80 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-blue-400">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
