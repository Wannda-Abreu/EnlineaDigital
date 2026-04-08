import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Hero from "./Hero"
import {
  Globe,
  Users,
  PenTool,
  Layout,
  BarChart3,
  Search,
} from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Wanda",
    role: "CEO & Founder · Desarrollo web y digitalización",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
    description:
      "Desarrolladora web con enfoque en el usuario, combinando creatividad y lógica para crear soluciones digitales atractivas y funcionales. Especialista en marketing digital, soporte administrativo colaborativo y digitalización de procesos.",
  },
  {
    id: 2,
    name: "Alejandro",
    role: "CEO & Founder · Consultoría de negocios y marketing",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
    description:
      "Consultor digital con experiencia en desarrollo de negocios, finanzas y gestión de redes sociales.",
  },
]

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
]

const stats = [
  { value: 50, suffix: "+", label: "negocios digitalizados" },
  { value: 300, suffix: "+", label: "clientes alcanzados" },
  { value: 3, suffix: "x", label: "más visibilidad online" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / 40
    const timer = setInterval(() => {
      setCount(prev => (prev >= target ? target : prev + increment))
    }, 40)
    return () => clearInterval(timer)
  }, [target])

  return <span>{Math.round(count)}{suffix}</span>
}

function TeamModal({ member, isOpen, onClose }: any) {
  if (!isOpen || !member) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 overflow-hidden"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">
          <h2 className="text-2xl font-semibold">{member.name}</h2>

          <p className="mt-1 text-sm text-sky-300">
            {member.role}
          </p>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            {member.description}
          </p>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-full bg-white text-black py-2 text-sm font-medium hover:scale-105 transition"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default function App() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-sm tracking-widest text-gray-400">
          ENLINEA DIGITAL
        </span>

        <button className="border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
          Hazte visible
        </button>
      </div>

      <main className="flex flex-col gap-24">

        <section className="mt-20">
          <Hero />
        </section>

        <section className="w-full px-6">
          <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775675852/Neutral_Modern_Fashion_Website_bc1d0p.png"
              alt="banner"
              className="w-full h-[300px] md:h-[420px] object-cover"
            />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Servicios destacados
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <s.icon className="mb-4 text-purple-400" />
                <h3 className="text-sm font-semibold">{s.title}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="px-6 text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Nuestro equipo
          </h2>

          <div className="flex flex-wrap justify-center gap-12">
            {teamMembers.map((member) => (
              <motion.button
                key={member.id}
                onClick={() => setSelected(member)}
                whileHover={{ scale: 1.05 }}
                className="w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />

                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-sky-300 mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-3 text-center px-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 p-6 rounded-xl"
            >
              <p className="text-3xl font-semibold">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs mt-2 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center px-6 py-16">
          <h2 className="text-3xl font-semibold">
            Empieza hoy y consigue clientes online
          </h2>

          <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Quiero empezar
          </button>
        </section>

      </main>

      <TeamModal
        member={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}