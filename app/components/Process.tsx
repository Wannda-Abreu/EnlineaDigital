import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const processSteps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Conocemos tu negocio, objetivos y visión para crear la estrategia perfecta.'
  },
  {
    number: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan detallado con KPIs claros y camino al éxito.'
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Creamos prototipos visuales que capturan la esencia de tu marca.'
  },
  {
    number: '04',
    title: 'Desarrollo',
    description: 'Construimos tu solución digital con tecnología moderna.'
  },
  {
    number: '05',
    title: 'Lanzamiento',
    description: 'Llevamos tu proyecto al mundo con una estrategia de lanzamiento efectiva.'
  },
  {
    number: '06',
    title: 'Crecimiento',
    description: 'Optimizamos y escalamos continuamente para maximizar resultados.'
  }
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Nuestro Proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Un enfoque sistemático para transformar tu visión en soluciones digitales de calidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white border border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="inline-block px-3 py-1 rounded-full bg-gray-900 text-white font-semibold mb-6 text-sm">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
