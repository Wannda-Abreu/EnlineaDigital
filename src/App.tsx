import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "./Hero";
import { Globe, Users, PenTool, Layout, BarChart3, Search } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Wanda",
    role: "CEO & Founder · Desarrollo web y digitalización",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
    description:
      "Desarrolladora web con enfoque en el usuario, combinando creatividad y lógica para crear soluciones digitales atractivas y funcionales. Especialista en marketing digital, soporte administrativo colaborativo y digitalización de procesos.",
  },
  {
    id: 2,
    name: "Alejandro",
    role: "CEO & Founder · Consultoría de negocios y marketing",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
    description:
      "Consultor digital con experiencia en desarrollo de negocios, finanzas y gestión de redes sociales.",
  },
];

const services = [
  { title: "Consultoría de marketing", icon: BarChart3 },
  { title: "Desarrollo web", icon: Globe },
  { title: "Asistencia administrativa", icon: Users },
  { title: "Diseño de logotipos", icon: PenTool },
  { title: "Estrategia de contenidos", icon: Layout },
  { title: "Diseño UX", icon: Layout },
  { title: "Marketing digital", icon: BarChart3 },
  { title: "Redes sociales", icon: Globe },
  { title: "SEO", icon: Search },
];

const stats = [
  {
    value: 81,
    suffix: "%",
    label: "de clientes investigan online antes de decidir",
  },
  { value: 2.5, suffix: "x", label: "más oportunidades con presencia digital" },
  { value: 70, suffix: "%", label: "prefieren negocios visibles en internet" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 40;
    const timer = setInterval(() => {
      setCount((prev) => (prev >= target ? target : prev + increment));
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {Math.round(count)}
      {suffix}
    </span>
  );
}

function TeamModal({ member, isOpen, onClose }: any) {
  if (!isOpen || !member) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-xl border border-purple-400/30 bg-slate-900/95 backdrop-blur-md overflow-hidden shadow-2xl"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{member.name}</h2>

          <p className="mt-1 text-sm text-gray-400">{member.role}</p>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            {member.description}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-purple-600 text-white py-2 text-sm font-medium hover:bg-purple-700 transition duration-300"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-950 to-black text-white relative overflow-hidden">
      {/* Subtle animated orbs - less intense */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse opacity-50"></div>
      <header className="w-full border-b border-purple-500/20 bg-slate-950/90 backdrop-blur-lg sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            <span className="text-sm tracking-widest font-semibold text-white">
              ENLINEA DIGITAL
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#servicios" className="hover:text-white transition duration-300 font-medium">
              Servicios
            </a>
            <a href="#equipo" className="hover:text-white transition duration-300 font-medium">
              Equipo
            </a>
            <a href="https://wa.me/18091234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300 font-medium">
              Contacto
            </a>
          </nav>

          <a href="https://wa.me/18091234567" target="_blank" rel="noopener noreferrer" className="border border-purple-400/40 px-5 py-2 rounded-lg text-sm text-white hover:bg-purple-600/30 hover:border-purple-400 transition duration-300" >
            Empezar
          </a>
        </div>
      </header>

      <main className="flex flex-col gap-24">
        <section className="mt-10">
          <Hero />
        </section>

        <section className="w-full mt-10 relative">
          <video
            src="https://res.cloudinary.com/dsyfal3wa/video/upload/v1775814184/Abierto_1920_x_400_px_980_x_500_px_980_x_400_px_csyrox.mp4"
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-xl"
            autoPlay
            muted
            loop
            playsInline
          />
          <motion.div
            initial={{ opacity: 0.5 }}
            whileHover={{ opacity: 0.85 }}
            className="absolute inset-0 bg-black backdrop-blur-sm rounded-xl flex items-center justify-center"
          >
            <div className="text-center text-white max-w-sm">
              <h3 className="text-2xl font-bold mb-3">Agencia Digital</h3>
              <p className="text-sm text-gray-200">Transformamos tu visión en soluciones digitales estratégicas que generan resultados reales para tu negocio</p>
            </div>
          </motion.div>
        </section>
        <section id="servicios" className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Nuestros Servicios
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -2 }}
                className="p-8 rounded-xl border border-purple-400/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition duration-300 hover:border-purple-400/40"
              >
                <s.icon className="mb-4 text-purple-300" size={28} />
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="equipo" className="px-6 text-center relative z-10 py-24">
          <h2 className="text-4xl font-bold mb-16 text-white">Nuestro equipo</h2>

          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => setSelected(member)}
                whileHover={{ y: -2 }}
                className="w-full max-w-[320px] overflow-hidden rounded-xl border border-purple-400/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition duration-300 hover:border-purple-400/40"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-gray-400 mt-1">{member.role}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="grid gap-8 sm:grid-cols-3 text-center px-6 max-w-6xl mx-auto relative z-10 py-24" id="stats">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-purple-400/20 p-8 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition duration-300 hover:border-purple-400/40"
            >
              <p className="text-3xl font-bold text-white">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm mt-3 text-gray-300 font-medium">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-2">
                Basado en tendencias digitales actuales
              </p>
            </div>
          ))}
        </section>

        <section id="contacto" className="text-center px-6 py-24 rounded-xl max-w-4xl mx-auto relative z-10 border border-purple-400/20 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-md">
          <h2 className="text-4xl font-bold mb-6 text-white">
            ¿Listo para crecer digitalmente?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Déjanos ayudarte a llevar tu negocio al siguiente nivel con soluciones digitales inteligentes.
          </p>

          <a href="https://wa.me/18091234567?text=Hola%20Enlinea%20Digital%2C%20quiero%20empezar" target="_blank" rel="noopener noreferrer" className="inline-block bg-purple-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 border border-purple-500/50">
            Quiero empezar
          </a>
        </section>
      </main>

      <TeamModal
        member={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
