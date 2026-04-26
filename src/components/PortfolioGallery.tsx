import { useEffect, useRef, useState } from "react";
import type { ServiceSample } from "../App";

type PortfolioGalleryProps = {
  samples: ServiceSample[];
};

const PORTFOLIO_SECTIONS = [
  {
    align: "left",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/f_auto,q_auto:good,vc_auto/v1776802853/Golden_uw6fkm.mp4",
    content: (
      <>
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sky-200/72">
          Desarrollo web y automatizacion
        </p>
        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
          En Enlinea Digital nos encargamos de tu web.
        </h2>
        <p className="mt-6 text-base leading-8 text-slate-300 md:text-lg">
          Enlinea Digital desarrolla sitios web y automatizaciones adaptadas a cada negocio, con
          enfoque en usabilidad, accesibilidad y claridad en cada recorrido.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          Trabajamos con disenos actuales de UX y UI para que tu marca se vea profesional, sea
          facil de usar y responda de forma coherente a las necesidades de tus clientes. Cada
          decision de diseno esta orientada a facilitar la navegacion, reducir friccion y guiar al
          usuario hacia una accion concreta.
        </p>
      </>
    ),
  },
  {
    align: "right",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/f_auto,q_auto:good,vc_auto/v1776802852/Golden_1_ywyjdz.mp4",
    content: (
      <>
        <p className="text-base leading-8 text-slate-300 md:text-lg">
          No se trata solo de tener presencia online, sino de construir una herramienta funcional
          que represente tu negocio, comunique tu valor y te ayude a generar resultados. Por eso,
          desarrollamos soluciones que combinan estetica, rendimiento y logica de negocio.
        </p>
        <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
          Integramos automatizaciones que optimizan procesos internos, reducen tareas repetitivas y
          mejoran la eficiencia operativa. Desde formularios inteligentes hasta flujos
          automatizados de comunicacion o gestion, buscamos que tu sistema digital trabaje contigo,
          no en tu contra.
        </p>
      </>
    ),
  },
  {
    align: "left",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/f_auto,q_auto:good,vc_auto/v1776802854/Golden_2_hnf5ay.mp4",
    content: (
      <>
        <p className="text-base leading-8 text-slate-300 md:text-lg">
          Ademas, cada proyecto se construye pensando en su escalabilidad, para que puedas crecer
          sin tener que empezar desde cero. Analizamos tu contexto, tu publico y tus objetivos para
          disenar una solucion que tenga sentido hoy y siga funcionando manana.
        </p>
        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm leading-7 text-slate-400">
            Soluciones digitales funcionales, accesibles y alineadas con el contexto operativo de
            tu empresa, pensadas no solo para verse bien, sino para aportar valor real en cada
            interaccion.
          </p>
        </div>
      </>
    ),
  },
] as const;

function PortfolioMedia({
  src,
  fallbackImage,
  label,
  onError,
}: {
  src: string;
  fallbackImage?: string;
  label: string;
  onError: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[24rem] w-full bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),#020617]"
    >
      {shouldLoad ? (
        <video
          src={src}
          className="h-auto w-full"
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          poster={fallbackImage}
          onError={onError}
          aria-label={label}
        />
      ) : fallbackImage ? (
        <img
          src={fallbackImage}
          alt=""
          width={1400}
          height={875}
          className="h-auto w-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      ) : (
        <div className="flex min-h-[24rem] items-center justify-center px-8 text-center">
          <p className="max-w-md text-sm leading-7 text-slate-300">
            Enlinea Digital crea experiencias web claras, actuales y adaptadas a cada negocio.
          </p>
        </div>
      )}
    </div>
  );
}

export default function PortfolioGallery({ samples }: PortfolioGalleryProps) {
  const fallbackSample = samples.find((sample) => sample.kind === "image") ?? samples[0];
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});

  return (
    <section
      aria-label="Presentacion editorial del servicio de desarrollo web"
      className="space-y-16 py-4 md:space-y-24 md:py-8"
    >
      {PORTFOLIO_SECTIONS.map((section, index) => (
        <div
          key={section.src}
          className="grid gap-10 md:grid-cols-[1.02fr_0.98fr] md:items-center md:gap-20"
        >
          <div
            className={`overflow-hidden rounded-[1.75rem] bg-slate-950 shadow-[0_28px_90px_rgba(2,6,23,0.36)] ${
              section.align === "right" ? "md:order-2" : ""
            }`}
          >
            {!videoErrors[index] ? (
              <PortfolioMedia
                src={section.src}
                fallbackImage={fallbackSample?.src}
                label={`Video editorial ${index + 1} del portfolio de Enlinea Digital`}
                onError={() =>
                  setVideoErrors((currentErrors) => ({
                    ...currentErrors,
                    [index]: true,
                  }))
                }
              />
            ) : fallbackSample ? (
              <img
                src={fallbackSample.src}
                alt="Vista editorial de un proyecto web desarrollado por Enlinea Digital"
                width={1400}
                height={875}
                className="h-auto w-full object-cover"
                loading="eager"
                decoding="async"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="flex min-h-[26rem] w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_28%),#020617] px-8 text-center">
                <p className="max-w-md text-sm leading-7 text-slate-300">
                  Enlinea Digital crea experiencias web claras, actuales y adaptadas a cada
                  negocio.
                </p>
              </div>
            )}
          </div>

          <div className={`max-w-2xl ${section.align === "right" ? "md:order-1" : ""}`}>
            {section.content}
          </div>
        </div>
      ))}
    </section>
  );
}
