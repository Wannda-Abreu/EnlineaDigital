import { m } from "motion/react";
import styles from "../Hero.module.css";

const DESKTOP_VIDEO_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/v1776332123/desktop_at6vkg.mp4";
const MOBILE_VIDEO_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/v1776332126/mobile_2_vsqib9.mp4";

type LocalSeoHeroProps = {
  title: string;
  subtitle: string;
};

export default function LocalSeoHero({ title, subtitle }: LocalSeoHeroProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroVideoContainer} aria-hidden="true">
        <video
          className={`${styles.heroVideo} ${styles.heroVideoDesktop}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={DESKTOP_VIDEO_URL} type="video/mp4" />
        </video>

        <video
          className={`${styles.heroVideo} ${styles.heroVideoMobile}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={MOBILE_VIDEO_URL} type="video/mp4" />
        </video>

        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>{title}</h1>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </m.div>

        <m.div
          className={styles.heroButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#servicios"
            className={`${styles.heroBtn} ${styles.heroBtnPrimary}`}
            aria-label="Ir a la seccion de servicios"
          >
            Ver servicios
          </a>
          <a
            href="#contacto"
            className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            aria-label="Ir a la seccion de contacto"
          >
            Solicitar propuesta
          </a>
        </m.div>

        <m.a
          href="#servicios"
          className={styles.heroScrollIndicator}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-label="Bajar a la seccion de servicios"
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </m.a>
      </div>
    </section>
  );
}
