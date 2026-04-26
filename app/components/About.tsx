import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function About() {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current && isInView && !isPlaying) {
      videoRef.current.play().catch(() => {
        // Si falla el autoplay, permitir que se reproduzca con click
      });
      setIsPlaying(true);
    }
  }, [isInView, isPlaying]);

  return (
    <section ref={ref} className="relative py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
            Sobre Enlinea Digital
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Transformamos ideas en realidades digitales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-lg"
          >
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              controls
              crossOrigin="anonymous"
              preload="metadata"
              className="w-full h-[400px] object-cover bg-gray-800"
            >
              <source src="https://res.cloudinary.com/dsyfal3wa/video/upload/v1775770635/Abierto_bvgtgy.mp4" type="video/mp4" />
              Tu navegador no soporta videos
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              En <span className="font-semibold text-gray-800">Enlinea Digital</span>, transformamos 
              visiones en experiencias digitales que impulsan el crecimiento de tu negocio.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Combinamos estrategia, diseño elegante y tecnología moderna para crear 
              soluciones web que generan resultados reales.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">100+</div>
                <div className="text-sm text-gray-500">Proyectos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
                <div className="text-sm text-gray-500">Años</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
                <div className="text-sm text-gray-500">Satisfacción</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
