import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const metrics = [
  {
    value: '80%',
    label: 'Incremento en conversiones'
  },
  {
    value: '67%',
    label: 'Más visibilidad online'
  },
  {
    value: '3x',
    label: 'Retorno de inversión'
  }
];

export function Metrics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="border border-white/10 rounded-lg p-8 hover:border-white/20 transition-colors duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                  {metric.value}
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}