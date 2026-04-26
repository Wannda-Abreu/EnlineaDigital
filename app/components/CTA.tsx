import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="contact" ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 rounded-lg p-12 md:p-16 text-center text-white"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              ¿Listo para transformar tu negocio?
            </h2>

            <p className="text-lg text-gray-200 mb-4 max-w-2xl mx-auto">
              Agenda una consultoría gratuita con nuestro equipo y descubre cómo podemos impulsar tu presencia digital.
            </p>

            <p className="text-gray-300 mb-12">
              Respuesta garantizada en menos de 24 horas
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/18091234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Contactar Ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="mailto:info@enlineadigital.com"
                className="px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/5 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Email
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
