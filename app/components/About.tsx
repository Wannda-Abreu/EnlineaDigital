import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Somos <span className="gradient-text">Innovación</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-xl" />
              <img
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjcmVhdGl2ZSUyMGFnZW5jeXxlbnwxfHx8fDE3NzUzMzU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Enlinea Digital Team"
                className="relative rounded-3xl w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/80 leading-relaxed">
              En <span className="text-blue-400 font-semibold">Enlinea Digital</span>, no solo creamos sitios web. 
              Construimos experiencias digitales que transforman negocios en la República Dominicana.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Combinamos <span className="text-violet-400 font-semibold">diseño premium</span>, 
              <span className="text-pink-400 font-semibold"> tecnología de punta</span> y 
              <span className="text-blue-400 font-semibold"> estrategia digital</span> para 
              llevar tu marca al siguiente nivel.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                <div className="text-sm text-white/60">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <div className="text-sm text-white/60">Años</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-sm text-white/60">Satisfacción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
