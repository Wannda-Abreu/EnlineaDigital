import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Rocket, Shield, TrendingUp } from 'lucide-react';

const differences = [
  {
    icon: Sparkles,
    title: 'Diseño Premium',
    description: 'No usamos plantillas genéricas. Cada proyecto es único y diseñado para destacar.'
  },
  {
    icon: Rocket,
    title: 'Tecnología Avanzada',
    description: 'Utilizamos las últimas herramientas y frameworks para resultados superiores.'
  },
  {
    icon: Shield,
    title: 'Soporte Continuo',
    description: 'No te dejamos solo. Estamos contigo en cada etapa del crecimiento de tu negocio.'
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprobado',
    description: 'Cada inversión está diseñada para generar retorno y hacer crecer tu empresa.'
  }
];

export function Difference() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            La <span className="gradient-text">Diferencia</span> Enlinea
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Por qué las empresas líderes confían en nosotros
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-20 h-20 bg-slate-950 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <diff.icon className="w-10 h-10 text-blue-400 group-hover:text-violet-400 transition-colors duration-300" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-glow-blue transition-all duration-300">
                {diff.title}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 rounded-3xl blur opacity-30" />
          <div className="relative glass p-12 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              No vendemos sitios web. 
              <span className="gradient-text"> Creamos activos digitales</span> que generan resultados.
            </h3>
            <p className="text-xl text-white/70">
              Tu éxito es nuestra métrica de éxito
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
