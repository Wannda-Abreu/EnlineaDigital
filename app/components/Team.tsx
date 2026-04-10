import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import teamPhoto from 'figma:asset/2829aa2210d9a77a5d115e2c6442c7a4f81c9e68.png';

const teamMembers = [
  {
    name: 'Alejandro',
    role: 'CEO / Founder & CFO',
    description: 'Experiencia en marketing, diseño gráfico y community management.'
  },
  {
    name: 'Wanda',
    role: 'CEO / Founder',
    description: 'Desarrolladora web con experiencia en marketing, diseño gráfico y community manager.'
  }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });


  return (
    <section 
      ref={ref} 
      className="relative py-32 bg-white overflow-hidden"
      aria-labelledby="team-heading"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="team-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
            Un equipo pequeño.
            <br />
            Una visión grande.
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto mb-8" aria-hidden="true" />
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="relative max-w-2xl w-full">
            <img
              src={teamPhoto}
              alt="Equipo Enlinea Digital: Alejandro y Wanda, fundadores"
              className="relative rounded-3xl w-full shadow-lg border border-gray-200"
            />
          </div>
        </motion.div>

        {/* Description Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-6"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Enlinea Digital es una agencia boutique creada para elevar el estándar digital en República Dominicana.
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Detrás del estudio hay un equipo estratégico que combina diseño, visión de negocio y ejecución moderna.
          </p>
        </motion.div>

        {/* Team Member Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-8 rounded-3xl border border-gray-200 bg-gray-50 transition-all duration-300 group-hover:shadow-lg focus-within:border-gray-300">
                {/* Accent Line */}
                <div className="w-16 h-1 bg-gray-300 rounded-full mb-6" aria-hidden="true" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 transition-all duration-300">
                  {member.name}
                </h3>
                
                <p className="text-gray-600 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block">
            <p className="relative text-xl md:text-2xl text-gray-900 max-w-4xl mx-auto px-8 py-6">
              Juntos, construimos experiencias digitales que no solo se ven bien,
              <span className="font-semibold"> sino que funcionan.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}