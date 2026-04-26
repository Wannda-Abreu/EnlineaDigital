import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Mobile version */}
      <div
        className="flex items-center md:hidden"
        style={{
          minHeight: 'calc(85 * var(--dvh))',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                AGENCIA DIGITAL
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                Transformamos ideas en{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  experiencias digitales
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                Ayudamos a emprendedores y comercios locales a digitalizar su servicio para que los clientes te encuentren rápido.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-base md:text-lg">
                  Empezar ahora
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 border border-gray-500 text-gray-200 font-semibold rounded-full hover:border-gray-300 hover:text-white transition-all duration-300 text-base md:text-lg">
                  Ver servicios
                </button>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              {/* Image container */}
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775654294/ChatGPT_Image_8_abr_2026_15_17_57_g0pusp.png"
                    alt="Agencia digital Enlinea - Transformando ideas en experiencias digitales"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Desktop version with different height */}
      <div
        className="hidden md:flex items-center"
        style={{
          minHeight: 'calc(95 * var(--dvh))',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:space-y-8 order-2 lg:order-1 flex flex-col justify-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                AGENCIA DIGITAL
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                Transformamos ideas en{' '}
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                  experiencias digitales
                </span>
              </h1>

              {/* Paragraph */}
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                Ayudamos a emprendedores y comercios locales a digitalizar su servicio para que los clientes te encuentren rápido.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-base md:text-lg">
                  Empezar ahora
                </button>
                <button className="px-6 md:px-8 py-3 md:py-4 border border-gray-500 text-gray-200 font-semibold rounded-full hover:border-gray-300 hover:text-white transition-all duration-300 text-base md:text-lg">
                  Ver servicios
                </button>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end order-1 lg:order-2"
            >
              {/* Image container */}
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm xl:max-w-md">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-pink-500/10 rounded-3xl blur-2xl" />

                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775654294/ChatGPT_Image_8_abr_2026_15_17_57_g0pusp.png"
                    alt="Agencia digital Enlinea - Transformando ideas en experiencias digitales"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating animation */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-pink-500/5"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}