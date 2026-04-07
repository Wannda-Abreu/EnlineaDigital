import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Conocemos tu negocio, objetivos y visión para crear la estrategia perfecta.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    number: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan detallado con KPIs claros y camino al éxito.',
    color: 'from-violet-500 to-purple-500'
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Creamos prototipos visuales que capturan la esencia de tu marca.',
    color: 'from-pink-500 to-rose-500'
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos tu solución digital con tecnología de vanguardia.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    number: '05',
    title: 'Lanzamiento',
    description: 'Llevamos tu proyecto al mundo con una estrategia de lanzamiento impactante.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    number: '06',
    title: 'Crecimiento',
    description: 'Optimizamos y escalamos continuamente para maximizar resultados.',
    color: 'from-violet-500 to-pink-500'
  }
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Nuestro <span className="gradient-text">Proceso</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Un método probado para transformar tu visión en realidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
              )}

              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur"
                  style={{ 
                    backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  }}
                />
                
                <div className="relative bg-slate-950/80 p-8 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                  <div className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-br ${step.color} mb-6`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow-blue transition-all duration-300">
                    {step.title}
                  </h3>

                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Visual */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden lg:block mt-16 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-full"
        />
      </div>
    </section>
  );
}
