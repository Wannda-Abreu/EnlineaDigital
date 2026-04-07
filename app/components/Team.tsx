import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import teamPhoto from 'figma:asset/2829aa2210d9a77a5d115e2c6442c7a4f81c9e68.png';

const teamMembers = [
  {
    name: 'Alejandro',
    role: 'CEO / Founder & CFO',
    description: 'Experiencia en marketing, diseño gráfico y community management.',
    gradient: 'from-blue-500 to-violet-500'
  },
  {
    name: 'Wanda',
    role: 'CEO / Founder',
    description: 'Desarrolladora web con experiencia en marketing, diseño gráfico y community manager.',
    gradient: 'from-violet-500 to-pink-500'
  }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section 
      ref={ref} 
      className="relative py-32 bg-gradient-to-b from-black via-slate-950 to-black overflow-hidden"
      aria-labelledby="team-heading"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-5" aria-hidden="true" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" aria-hidden="true" />
      
      {/* Subtle Particles */}
      <div className="absolute inset-0" aria-hidden="true">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="team-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Un equipo pequeño.
            <br />
            <span className="gradient-text">Una visión grande.</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto mb-8" aria-hidden="true" />
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex justify-center"
        >
          <div className="relative max-w-2xl w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-2xl" aria-hidden="true" />
            <img
              src={teamPhoto}
              alt="Equipo Enlinea Digital: Alejandro y Wanda, fundadores"
              className="relative rounded-3xl w-full shadow-2xl"
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
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Enlinea Digital es una agencia boutique creada para elevar el estándar digital en República Dominicana.
          </p>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
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
              {/* Glow Effect on Hover */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} 
                aria-hidden="true"
              />
              
              {/* Card */}
              <div className="relative glass p-8 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-[1.02] focus-within:border-white/30">
                {/* Accent Line */}
                <div className={`w-16 h-1 bg-gradient-to-r ${member.gradient} rounded-full mb-6`} aria-hidden="true" />
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-glow-blue transition-all duration-300">
                  {member.name}
                </h3>
                
                <p className="text-blue-400 font-semibold mb-4 text-lg">
                  {member.role}
                </p>
                
                <p className="text-white/70 leading-relaxed">
                  {member.description}
                </p>

                {/* Decorative Corner Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/30 group-hover:bg-blue-400 transition-all duration-300" aria-hidden="true" />
                <div className="absolute top-4 right-8 w-2 h-2 rounded-full bg-violet-400/30 group-hover:bg-violet-400 transition-all duration-300 delay-75" aria-hidden="true" />
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
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 rounded-2xl blur-xl" aria-hidden="true" />
            <p className="relative text-xl md:text-2xl text-white/90 max-w-4xl mx-auto px-8 py-6">
              Juntos, construimos experiencias digitales que no solo se ven bien,
              <span className="gradient-text font-semibold"> sino que funcionan.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}