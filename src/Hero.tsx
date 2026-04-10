import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden">

      <div className="max-w-3xl px-6 flex flex-col items-center gap-6">

        {/* TITULO */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            Consigue clientes online{" "}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-purple-300"
          >
            sin complicaciones
          </motion.span>

        </h1>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-gray-300 max-w-xl leading-relaxed text-lg"
        >
          Creamos tu presencia digital para que te encuentren, te elijan y te contacten.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#servicios" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 border border-purple-500/50 text-center">
            ¿Qué te ofrecemos?
          </a>

          <a href="#stats" className="inline-block border border-purple-400/40 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/5 transition duration-300 text-center">
            ¿Por qué empezar?
          </a>
        </motion.div>
      </div>
    </section>
  )
}