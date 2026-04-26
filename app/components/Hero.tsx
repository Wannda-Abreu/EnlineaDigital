import { motion } from 'motion/react';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.heroSection}>
      {/* Background Video Container */}
      <div className={styles.heroVideoContainer}>
        {/* Desktop Video */}
        <video
          className={`${styles.heroVideo} ${styles.heroVideoDesktop}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dsyfal3wa/video/upload/v1776332123/desktop_at6vkg.mp4"
            type="video/mp4"
          />
        </video>

        {/* Mobile Video */}
        <video
          className={`${styles.heroVideo} ${styles.heroVideoMobile}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dsyfal3wa/video/upload/v1776332126/mobile_2_vsqib9.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}
        <div className={styles.heroOverlay} />
      </div>

      {/* Content Layer */}
      <div className={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            Enlinea Digital
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.heroSubtitle}>
            Transformamos tu presencia digital con estrategias modernas, diseño elegante y tecnología robusta
          </p>
        </motion.div>

        <motion.div
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#contact" className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}>
            Empezar Ahora
          </a>
          <a href="#services" className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}>
            Ver Servicios
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.heroScrollIndicator}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
