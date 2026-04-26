import { m } from "motion/react";
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const DESKTOP_VIDEO_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/f_auto,q_auto:good,vc_auto,w_1440/v1776332123/desktop_at6vkg.mp4";
const MOBILE_VIDEO_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/f_auto,q_auto/v1776332126/mobile_2_vsqib9.mp4";
const HERO_POSTER_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1777122051/enlinea-hero-poster_vylslh.png";

type NetworkConnectionLike = {
  saveData?: boolean;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
};

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [saveDataEnabled, setSaveDataEnabled] = useState(false);
  const [canLoadMobileVideo, setCanLoadMobileVideo] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = ("connection" in navigator
      ? navigator.connection
      : null) as NetworkConnectionLike | null;

    const syncMedia = () => {
      setIsDesktop(desktopQuery.matches);
      setPrefersReducedMotion(motionQuery.matches);
      setSaveDataEnabled(Boolean(connection?.saveData));
    };

    syncMedia();
    desktopQuery.addEventListener("change", syncMedia);
    motionQuery.addEventListener("change", syncMedia);
    connection?.addEventListener?.("change", syncMedia);

    return () => {
      desktopQuery.removeEventListener("change", syncMedia);
      motionQuery.removeEventListener("change", syncMedia);
      connection?.removeEventListener?.("change", syncMedia);
    };
  }, []);

  useEffect(() => {
    if (isDesktop || prefersReducedMotion || saveDataEnabled) {
      setCanLoadMobileVideo(false);
      return;
    }

    const timerId = window.setTimeout(() => {
      setCanLoadMobileVideo(true);
    }, 900);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [isDesktop, prefersReducedMotion, saveDataEnabled]);

  const shouldPlayDesktopVideo = isDesktop && !prefersReducedMotion;
  const shouldPlayMobileVideo = !isDesktop && !prefersReducedMotion && !saveDataEnabled && canLoadMobileVideo;
  const activeVideoUrl = isDesktop ? DESKTOP_VIDEO_URL : MOBILE_VIDEO_URL;

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroVideoContainer} aria-hidden="true">
        {shouldPlayDesktopVideo || shouldPlayMobileVideo ? (
          <video
            key={activeVideoUrl}
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER_URL}
          >
            <source src={activeVideoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={HERO_POSTER_URL}
            alt=""
            width={1200}
            height={1600}
            className={styles.heroPoster}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        )}

        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroContent}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>Agencia de servicios digitales en Republica Dominicana</h1>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.heroSubtitle}>
            Creamos tu presencia digital con paginas web, branding, SEO y ofertas de servicios
            digitales para negocios dominicanos que quieren crecer y vender mas.
          </p>
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
            Ver servicios digitales
          </a>
          <a
            href="#stats"
            className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            aria-label="Ir a la seccion de resultados"
          >
            Ver beneficios
          </a>
          <a
            href="#planes"
            className={`${styles.heroBtn} ${styles.heroBtnSecondary}`}
            aria-label="Ir a la seccion de planes y precios"
          >
            Ver planes y precios
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
