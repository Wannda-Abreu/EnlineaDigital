import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import {
  Globe,
  Users,
  PenTool,
  Layout,
  BarChart3,
  Search,
} from "lucide-react"

const services = [
  { title: "Creación de tienda online", icon: Globe },
  { title: "Gestión de redes sociales", icon: Users },
  { title: "Fotografía de producto", icon: PenTool },
  { title: "Identidad visual artesanal", icon: Layout },
  { title: "SEO local", icon: Search },
  { title: "Digitalización de negocios", icon: BarChart3 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#2f2a25] antialiased">

      {/* HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f1e8]/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775741260/b35c18e0-823c-4e42-b7de-2631dbc14c15_gjqw7h.png"
            className="w-36"
          />

          <a
            href="https://wa.me/346XXXXXXXX"
            className="bg-[#3F6B5B] text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition"
          >
            Hablar ahora
          </a>

        </div>
      </header>

      <main className="flex flex-col gap-32">

        {/* HERO */}
        <section className="relative w-full h-[90vh] flex items-center justify-center text-center">

          <img
            src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775737384/Neutral_Modern_Fashion_Website_2_liy16e.png"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#2f2a25]/60" />

          <div className="relative z-10 max-w-2xl px-6 text-white">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Vende online sin dejar de ser tú
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[#e7e0d6]"
            >
              Digitalizamos tu negocio artesanal para que consigas más clientes sin perder tu esencia.
            </motion.p>

            <motion.a
              href="https://wa.me/346XXXXXXXX"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-block mt-8 bg-white text-[#2f2a25] px-8 py-3 rounded-full hover:scale-105 transition"
            >
              Quiero empezar
            </motion.a>

          </div>
        </section>

        {/* PROBLEMA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Sabemos lo que te está pasando
          </h2>

          <p className="mt-6 text-[#5c5145]">
            Tienes un negocio con valor, pero no sabes cómo vender online,
            no tienes tiempo para redes o tu web no genera ventas.
          </p>
        </motion.section>

        {/* SOLUCIÓN */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Nosotros lo hacemos por ti
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#5c5145]">
            Creamos tu presencia digital completa adaptada a tu esencia artesanal.
          </p>
        </motion.section>

        {/* SERVICIOS */}
        <section className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold mb-12 tracking-tight">
            Cómo te ayudamos
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 bg-[#FFFAF3] rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <s.icon className="mb-4 text-[#3F6B5B]" />
                <p className="font-medium">{s.title}</p>
              </motion.div>
            ))}
          </motion.div>

        </section>

        {/* BENEFICIOS */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Lo que vas a conseguir
          </h2>

          <ul className="mt-8 space-y-4 text-[#5c5145]">
            <li>✔ Más clientes sin depender del boca a boca</li>
            <li>✔ Presencia online profesional</li>
            <li>✔ Ahorro de tiempo</li>
            <li>✔ Estrategia clara para crecer</li>
          </ul>
        </motion.section>

        {/* CTA FINAL */}
        <section className="text-center py-20 px-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Empieza hoy a vender online
          </h2>

          <a
            href="https://wa.me/346XXXXXXXX"
            className="inline-block mt-6 bg-[#3F6B5B] text-white px-8 py-3 rounded-full hover:scale-105 transition"
          >
            Hablar por WhatsApp
          </a>
        </section>

      </main>

      {/* BOTÓN FLOTANTE */}
      <a
        href="https://wa.me/346XXXXXXXX"
        className="fixed bottom-6 right-6 bg-[#3F6B5B] text-white px-5 py-3 rounded-full shadow-lg animate-bounce hover:scale-110 transition"
      >
        WhatsApp
      </a>

    </div>
  )
}