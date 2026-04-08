import { motion } from "motion/react"
import { useState, useEffect } from "react"

const teamMembers = [
  {
    id: 1,
    name: "Wanda",
    role: "Soporte administrativo colaborativo y digitalización de procesos",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
    description: "Hola, soy Wanda. Trabajo en soporte administrativo colaborativo y digitalización de procesos, ayudando a equipos a organizar su trabajo y dar seguimiento a iniciativas.\nMe gusta ordenar información, documentar procesos y apoyar para que el trabajo fluya mejor entre las personas.\nMe interesa seguir creciendo hacia la gestión de proyectos tecnológicos. Hace poco completé la certificación de Project Management de Google como parte de ese camino.",
    services: [
      "Consultoría de marketing",
      "Desarrollo web",
      "Asistencia de administración",
      "Diseño de logotipos",
      "Estrategia de contenidos",
      "Recursos humanos (RR. HH.)",
      "Diseño de experiencia de usuario (UX)",
      "Marketing digital",
      "Marketing de redes sociales",
      "Optimización para motores de búsqueda (SEO)",
    ],
  },
  {
    id: 2,
    name: "Próximamente",
    role: "Perfil colaborador",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
    description: "Perfil en actualización.",
    services: ["Información próximamente"],
  },
]

const services = [
  {
    title: "Negocios listos para buscar",
    description: "Digitalizamos tu servicio para que los clientes te encuentren en un clic.",
  },
  {
    title: "Clientes que eligen rápido",
    description: "Páginas claras, atractivas y diseñadas para aparecer en búsquedas locales.",
  },
  {
    title: "Acceso instantáneo",
    description: "Tu servicio disponible online con rapidez, sin esperas ni complicaciones.",
  },
]

const stats = [
  {
    value: 80,
    suffix: "%",
    label: "de usuarios compran online",
    subtitle: "Tu negocio debe estar ahí"
  },
  {
    value: 67,
    suffix: "%",
    label: "buscan online antes de comprar",
    subtitle: "Sé el primero que encuentren"
  },
  {
    value: 3,
    suffix: "x",
    label: "más visibilidad con presencia online",
    subtitle: "Aumenta tus oportunidades"
  },
]

const highlights = [
  "Tu negocio fácil de encontrar en línea",
  "Clientes llegan con solo un clic",
  "Digitalizamos servicios locales rápido y sencillo",
]

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / (duration / 50)
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) return target
        return Math.min(prev + increment, target)
      })
    }, 50)
    return () => clearInterval(timer)
  }, [target, duration])

  return <span>{Math.round(count)}{suffix}</span>
}

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  description: string
  services: string[]
}

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
      return () => window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen || !member) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[40px] border border-white/10 bg-slate-950/95 p-8 shadow-2xl backdrop-blur-3xl sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition"
        >
          <span className="text-xl leading-none">×</span>
        </button>

        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          <div className="flex flex-col items-center gap-4">
            <div className="overflow-hidden rounded-[24px] border border-white/10">
              <img
                src={member.image}
                alt={member.name}
                className="h-80 w-72 object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl font-semibold text-white">{member.name}</h2>
              <p className="mt-2 text-sm text-sky-300">{member.role}</p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Sobre</h3>
              <p className="whitespace-pre-line text-sm leading-7 text-slate-300">
                {member.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">Servicios</h3>
              <div className="flex flex-wrap gap-2">
                {member.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex rounded-full border border-sky-300/30 bg-sky-300/5 px-3 py-1 text-xs text-sky-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function TeamCard({
  member,
  onClick,
}: {
  member: TeamMember
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group w-full overflow-hidden rounded-[32px] border border-white/10 bg-white/5 transition-all duration-300 hover:border-sky-300/30 hover:shadow-[0_0_40px_rgba(56,189,248,0.3)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
        <p className="mt-2 text-sm text-sky-300 line-clamp-2">{member.role}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 group-hover:text-sky-300 transition">
          Ver más
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.button>
  )
}

export default function App() {
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null)

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="background-grid" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_25%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_25%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_-45px_rgba(56,189,248,0.45)]">
              <img
                src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png"
                alt="Enlinea Digital logo"
                className="h-10 w-auto object-cover"
              />
            </div>
            <span className="gradient-text text-sm font-semibold uppercase tracking-[0.35em]">Enlinea Digital</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Servicios</a>
            <a href="#about" className="transition hover:text-white">Proceso</a>
            <a href="#contact" className="transition hover:text-white">Contacto</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white transition duration-300 hover:border-sky-300/60 hover:bg-white/10"
          >
            Hazte visible
          </a>
        </motion.header>

        <main className="grid gap-16 py-10 lg:gap-20">
          <section className="grid place-items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full rounded-[40px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-80px_rgba(56,189,248,0.45)] backdrop-blur-3xl sm:p-12"
            >
              <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-7">
                <div className="rounded-full border border-sky-300/20 bg-sky-300/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-200/90 backdrop-blur-md">
                  Agencia digital
                </div>

                <h1 className="text-4xl font-semibold leading-[1.05] text-white sm:text-6xl">
                  Haz que tu negocio esté
                  <span className="block gradient-text">a un clic de tus clientes.</span>
                </h1>

                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Ayudamos a emprendedores y comercios locales a digitalizar su servicio para que los clientes te encuentren rápido.
                </p>

                <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="#contact"
                    className="btn-glow inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5"
                  >
                    Pon tu negocio online
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm text-slate-100 transition duration-300 hover:bg-white/10"
                  >
                    Cómo llegas a clientes
                  </a>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="services" className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="glass-card p-8 sm:p-10"
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-sky-300/15 bg-sky-300/5 px-4 py-2 text-sm text-sky-200">
                Servicios destacados
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Hacemos tu negocio simple de encontrar.
              </h2>
              <p className="mt-4 max-w-xl text-slate-300">
                Digitalizamos servicios locales para que los clientes te vean, te elijan y te contacten en un clic.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 transition hover:border-sky-300/30 hover:bg-white/10">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-white">Diseño que conecta</h3>
                <p className="mt-4 text-slate-300">
                  Cada página se diseña para que tus servicios sean claros, rápidos de entender y fáciles de elegir con un clic.
                </p>
                <ul className="mt-8 space-y-4 text-sm text-slate-300">
                  {highlights.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-sky-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-card p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-white">Nuestra metodología</h3>
                <div className="mt-6 grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-3xl font-semibold text-sky-300">01</span>
                    Plan rápido para tu servicio
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-3xl font-semibold text-indigo-300">02</span>
                    Página lista para ser encontrada
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-3xl font-semibold text-fuchsia-300">03</span>
                    Lanzamiento pensado en clientes
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <span className="block text-3xl font-semibold text-emerald-300">04</span>
                    Soporte para crecer rápido
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          <section id="about" className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-8 text-center hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] transition-all duration-300 cursor-pointer"
              >
                <p className="text-4xl font-semibold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
                <p className="mt-1 text-xs text-slate-400">{stat.subtitle}</p>
              </motion.div>
            ))}
          </section>

          <section id="team" className="space-y-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Nuestro equipo</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Colaboradores dedicados a tu éxito digital.
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  onClick={() => setSelectedTeamMember(member)}
                />
              ))}
            </div>

            <TeamModal
              member={selectedTeamMember}
              isOpen={selectedTeamMember !== null}
              onClose={() => setSelectedTeamMember(null)}
            />
          </section>

          <section id="contact" className="glass-card p-8 sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_auto] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300/80">Tu servicio a un clic</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Haz que te encuentren y te elegían rápido.
                </h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  Digitalizamos servicios de emprendedores y comercios locales para que los clientes te descubran al instante.
                </p>
              </div>

              <div className="flex items-center justify-start gap-4 sm:justify-end">
                <a
                  href="#"
                  className="btn-glow rounded-full px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5"
                >
                  Quiero estar online
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
