import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import Hero from "./Hero";
import { Globe, Users, PenTool, Layout, BarChart3, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

type Service = {
  title: string;
  icon: LucideIcon;
};

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

type TeamModalProps = {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
};

type AboutModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type ModalShellProps = {
  isOpen: boolean;
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  maxWidthClass: string;
  children: ReactNode;
};

const WHATSAPP_URL = "https://wa.me/18091234567";
const WHATSAPP_START_URL =
  "https://wa.me/18091234567?text=Hola%20Enlinea%20Digital%2C%20quiero%20empezar";
const ABOUT_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1776333727/b4HjfudfsnZDK4Jhy8CQifmugQPwQCkN1MdLGljaS6I79t7RrcaLgY9U2SaCKKKQGF3OlAkNu9-xjiTZ46o0sCDXut-8eT5CShqnDSAJYll17C_5uB52a2qJbYQjp1iKdS7WS7Q-isG0BBwNbNtMrimaZ9wta5SVrzWDpFc4kxOP0wgZZHAIhT9msFt4rcEG_kmteaa.jpg";
const DEFERRED_SECTION_CLASS = "[content-visibility:auto] [contain-intrinsic-size:1px_720px]";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Wanda",
    role: "CEO & Founder · Desarrollo web y digitalización",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
    description:
      "Desarrolladora web con enfoque en el usuario, combinando creatividad y lógica para crear soluciones digitales atractivas y funcionales. Especialista en marketing digital, soporte administrativo colaborativo y digitalización de procesos.",
  },
  {
    id: 2,
    name: "Alejandro",
    role: "CEO & Founder · Consultoría de negocios y marketing",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
    description:
      "Consultor digital con experiencia en desarrollo de negocios, finanzas y gestión de redes sociales.",
  },
];

const services: Service[] = [
  { title: "Consultoría de marketing", icon: BarChart3 },
  { title: "Desarrollo web", icon: Globe },
  { title: "Asistencia administrativa", icon: Users },
  { title: "Diseño de logotipos", icon: PenTool },
  { title: "Estrategia de contenidos", icon: Layout },
  { title: "Diseño UX", icon: Layout },
  { title: "Marketing digital", icon: BarChart3 },
  { title: "Redes sociales", icon: Globe },
  { title: "SEO", icon: Search },
];

const stats: Stat[] = [
  {
    value: 81,
    suffix: "%",
    label: "de clientes investigan online antes de decidir",
  },
  { value: 2.5, suffix: "x", label: "más oportunidades con presencia digital" },
  { value: 70, suffix: "%", label: "prefieren negocios visibles en internet" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const shouldReduceMotion = useReducedMotion();
  const valueRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const decimals = Number.isInteger(target) ? 0 : 1;

  useEffect(() => {
    if (shouldReduceMotion || isVisible) {
      return;
    }

    const node = valueRef.current;
    if (!node) {
      return;
    }

    if (!("IntersectionObserver" in globalThis)) {
      const fallbackFrame = globalThis.requestAnimationFrame(() => setIsVisible(true));
      return () => globalThis.cancelAnimationFrame(fallbackFrame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !isVisible) {
      return;
    }

    let frameId = 0;
    let startTime: number | null = null;
    const duration = 1200;

    const animateCount = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(target * progress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateCount);
      }
    };

    frameId = window.requestAnimationFrame(animateCount);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, shouldReduceMotion, target]);

  const displayValue = shouldReduceMotion ? target : isVisible ? count : 0;
  const formattedCount = new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <span ref={valueRef}>
      {formattedCount}
      {suffix}
    </span>
  );
}

function useModalBehavior(
  isOpen: boolean,
  onClose: () => void,
  focusRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    focusRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusRef, isOpen, onClose]);
}

function ModalShell({
  isOpen,
  onClose,
  labelledBy,
  describedBy,
  maxWidthClass,
  children,
}: ModalShellProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur"
      onClick={onClose}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
        className={`w-full overflow-hidden rounded-2xl border border-purple-400/30 bg-slate-900/95 shadow-2xl backdrop-blur-md ${maxWidthClass}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        aria-describedby={describedBy}
      >
        {children}
      </m.div>
    </div>
  );
}

function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useModalBehavior(isOpen, onClose, closeButtonRef);

  if (!isOpen || !member) {
    return null;
  }

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      labelledBy={titleId}
      describedBy={descriptionId}
      maxWidthClass="max-w-lg"
    >
      <img
        src={member.image}
        alt={`Retrato de ${member.name}`}
        className="h-56 w-full object-cover"
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 32rem, 100vw"
      />

      <div className="p-6">
        <h2 id={titleId} className="text-2xl font-bold text-white">
          {member.name}
        </h2>
        <p className="mt-1 text-sm text-gray-300">{member.role}</p>
        <p id={descriptionId} className="mt-4 text-sm leading-relaxed text-gray-200">
          {member.description}
        </p>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-purple-600 py-2 text-sm font-medium text-white transition duration-300 hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
        >
          Cerrar
        </button>
      </div>
    </ModalShell>
  );
}

function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useModalBehavior(isOpen, onClose, closeButtonRef);

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      labelledBy={titleId}
      describedBy={descriptionId}
      maxWidthClass="max-w-4xl"
    >
      <div className="grid md:grid-cols-[1.05fr_1fr]">
        <img
          src={ABOUT_IMAGE_URL}
          alt="Equipo de En Línea Digital trabajando en soluciones para pequeños negocios"
          className="h-full min-h-72 w-full object-cover"
          loading="lazy"
          decoding="async"
        />

        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Quiénes somos
          </p>
          <h2 id={titleId} className="mt-3 text-3xl font-bold text-white">
            En Línea Digital
          </h2>

          <div id={descriptionId} className="mt-6 space-y-5 text-sm leading-7 text-gray-200 md:text-base">
            <p>
              En En Línea Digital somos dos especialistas en marketing digital enfocados en ayudar
              a pequeños negocios a dar el salto al mundo online. Sabemos que muchos negocios aún
              no tienen presencia digital, y eso hoy en día significa perder oportunidades reales
              de crecimiento.
            </p>
            <p>
              Actualmente, más del 80% de los clientes realiza búsquedas en internet antes de tomar
              una decisión de compra. Si tu negocio no está presente, simplemente no existe para
              una gran parte de tu mercado.
            </p>
            <p>
              Por eso, nuestra misión es clara: digitalizar tu negocio de forma sencilla, efectiva
              y sin complicaciones. Creamos tu presencia online para que te encuentren, te elijan y
              puedas convertir visitas en clientes.
            </p>
            <p>
              Te acompañamos en todo el proceso, desde la creación de tu imagen digital hasta la
              optimización de tu visibilidad, con soluciones adaptadas a tus necesidades y a tu
              nivel de digitalización.
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="mt-8 w-full rounded-lg bg-purple-600 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
          >
            Cerrar
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

export default function App() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-slate-950 to-black text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-purple-600/10 opacity-50 blur-3xl mix-blend-multiply filter animate-pulse"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-pink-600/10 opacity-50 blur-3xl mix-blend-multiply filter animate-pulse"
        />

        <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-950/90 backdrop-blur-lg">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="#inicio" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300">
              <img
                src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png"
                alt="Logotipo de En Línea Digital"
                className="h-8 w-8 object-contain"
                decoding="async"
                fetchPriority="high"
              />
              <span className="text-sm font-semibold tracking-widest text-white">
                ENLÍNEA DIGITAL
              </span>
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
              <a href="#servicios" className="font-medium transition duration-300 hover:text-white">
                Servicios
              </a>
              <a href="#equipo" className="font-medium transition duration-300 hover:text-white">
                Equipo
              </a>
              <a href="#contacto" className="font-medium transition duration-300 hover:text-white">
                Contacto
              </a>
            </nav>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-purple-400/40 px-5 py-2 text-sm text-white transition duration-300 hover:border-purple-400 hover:bg-purple-600/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Empezar
            </a>
          </div>
        </header>

        <main className="flex flex-col gap-24">
          <section id="inicio">
            <Hero />
          </section>

          <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-6">
            <div className="rounded-2xl border border-purple-400/20 bg-white/6 px-6 py-8 text-center shadow-[0_24px_90px_rgba(15,23,42,0.24)] backdrop-blur-md md:px-10 md:py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-300">
                Presencia online para negocios reales
              </p>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-4xl">
                En En Línea Digital ayudamos a pequeños negocios a tener presencia online y atraer
                clientes.
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
                Hoy, más del 80% de las personas busca en internet antes de comprar. Si no estás,
                no existes.
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
                Nosotros te ayudamos a estar en línea, crecer y vender más.
              </p>
              <button
                type="button"
                onClick={() => setAboutOpen(true)}
                className="mt-6 inline-flex items-center justify-center text-sm font-semibold text-purple-300 underline decoration-purple-400/60 underline-offset-4 transition duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
              >
                Ver más
              </button>
            </div>
          </section>

          <section
            id="servicios"
            aria-labelledby="servicios-title"
            className={`relative z-10 mx-auto max-w-6xl px-6 ${DEFERRED_SECTION_CLASS}`}
          >
            <h2 id="servicios-title" className="mb-16 text-center text-4xl font-bold text-white">
              Nuestros Servicios
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service) => (
                <m.div
                  key={service.title}
                  whileHover={{ y: -2 }}
                  className="rounded-xl border border-purple-400/20 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-purple-400/40 hover:bg-white/10"
                >
                  <service.icon aria-hidden="true" className="mb-4 text-purple-300" size={28} />
                  <h3 className="text-base font-semibold text-white">{service.title}</h3>
                </m.div>
              ))}
            </div>
          </section>

          <section
            id="equipo"
            aria-labelledby="equipo-title"
            className={`relative z-10 px-6 py-24 text-center ${DEFERRED_SECTION_CLASS}`}
          >
            <h2 id="equipo-title" className="mb-16 text-4xl font-bold text-white">
              Nuestro equipo
            </h2>

            <div className="flex flex-wrap justify-center gap-12">
              {teamMembers.map((member) => (
                <m.button
                  key={member.id}
                  type="button"
                  onClick={() => setSelected(member)}
                  whileHover={{ y: -2 }}
                  className="w-full max-w-[320px] overflow-hidden rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur-sm transition duration-300 hover:border-purple-400/40 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                >
                  <img
                    src={member.image}
                    alt={`Retrato de ${member.name}`}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 768px) 320px, 100vw"
                  />

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="mt-1 text-sm text-gray-400">{member.role}</p>
                  </div>
                </m.button>
              ))}
            </div>
          </section>

          <section
            id="stats"
            aria-labelledby="stats-title"
            className={`relative z-10 mx-auto grid max-w-6xl gap-8 px-6 py-24 text-center sm:grid-cols-3 ${DEFERRED_SECTION_CLASS}`}
          >
            <h2 id="stats-title" className="sr-only">
              Resultados y métricas
            </h2>

            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-purple-400/20 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-purple-400/40 hover:bg-white/10"
              >
                <p className="text-3xl font-bold text-white">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-gray-300">{stat.label}</p>
                <p className="mt-2 text-xs text-gray-500">Basado en tendencias digitales actuales</p>
              </div>
            ))}
          </section>

          <section
            id="contacto"
            aria-labelledby="contacto-title"
            className={`relative z-10 mx-auto max-w-4xl rounded-xl border border-purple-400/20 bg-gradient-to-br from-white/5 to-white/5 px-6 py-24 text-center backdrop-blur-md ${DEFERRED_SECTION_CLASS}`}
          >
            <h2 id="contacto-title" className="mb-6 text-4xl font-bold text-white">
              ¿Listo para crecer digitalmente?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              Déjanos ayudarte a llevar tu negocio al siguiente nivel con soluciones digitales
              inteligentes.
            </p>

            <a
              href={WHATSAPP_START_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg border border-purple-500/50 bg-purple-600 px-10 py-3 font-semibold text-white transition duration-300 hover:bg-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
            >
              Quiero empezar
            </a>
          </section>
        </main>

        <footer className={`relative z-10 mt-20 border-t border-white/10 bg-slate-950/70 ${DEFERRED_SECTION_CLASS}`}>
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-purple-300">
                En Línea Digital
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Presencia online clara, útil y enfocada en convertir.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Ayudamos a pequeños negocios a verse profesionales en internet, ganar visibilidad y
                convertir visitas en clientes.
              </p>
            </div>

            <div className="flex flex-col gap-6 text-sm text-gray-300 md:items-end">
              <nav aria-label="Footer" className="flex flex-wrap gap-5">
                <a href="#inicio" className="transition duration-300 hover:text-white">
                  Inicio
                </a>
                <a href="#servicios" className="transition duration-300 hover:text-white">
                  Servicios
                </a>
                <a href="#equipo" className="transition duration-300 hover:text-white">
                  Equipo
                </a>
                <a href="#contacto" className="transition duration-300 hover:text-white">
                  Contacto
                </a>
              </nav>

              <a
                href={WHATSAPP_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-purple-400/30 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-purple-300 hover:bg-white/5"
              >
                Hablar por WhatsApp
              </a>

              <p className="text-xs text-gray-500">© {currentYear} En Línea Digital</p>
            </div>
          </div>
        </footer>

        <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
        <TeamModal member={selected} isOpen={selected !== null} onClose={() => setSelected(null)} />
      </div>
    </LazyMotion>
  );
}
