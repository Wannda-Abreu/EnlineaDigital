import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center text-center">

      <img
        src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775737384/Neutral_Modern_Fashion_Website_2_liy16e.png"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#2f2a25]/50 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-2xl px-6 text-white">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight"
        >
          Haz crecer tu negocio sin perder tu esencia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[#e7e0d6]"
        >
          Ayudamos a artesanos y negocios locales a vender online de forma auténtica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-white text-[#2f2a25] px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            Quiero digitalizar mi negocio
          </button>

          <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#2f2a25] transition">
            Ver cómo trabajamos
          </button>
        </motion.div>

      </div>

    </section>
  )
}