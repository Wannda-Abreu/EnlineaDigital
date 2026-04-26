import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import {
  Suspense,
  lazy,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import {
  ArrowUpRight,
  BarChart3,
  Eye,
  Globe,
  Layout,
  Menu,
  Search,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Hero from "./Hero";
import ChatFAQ from "./components/ChatFAQ";
import GrowthPlansSection from "./components/GrowthPlansSection";
const PortfolioGallery = lazy(() => import("./components/PortfolioGallery"));

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
};

export type ServiceSample = {
  title: string;
  src: string;
  kind: "image" | "video";
  caption: string;
  url: string;
};

type Service = {
  title: string;
  icon: LucideIcon;
  description: string;
  eyebrow: string;
  highlights: string[];
  samples?: ServiceSample[];
};

type Stat = {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
};

type BlogFooterArticle = {
  slug: string;
  title: string;
  updatedAt: string;
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

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

const WHATSAPP_URL = "https://wa.me/18091234567";
const WHATSAPP_START_URL =
  "https://wa.me/18091234567?text=Hola%20Enlinea%20Digital%2C%20quiero%20empezar";
const ABOUT_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1280/v1776333945/Captura_de_pantalla_2026-04-16_120456_db0oao.png";
const AGENCY_SECTION_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_960/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png";
const DEFERRED_SECTION_CLASS = "[content-visibility:auto] [contain-intrinsic-size:1px_720px]";
const WEB_PORTFOLIO_HASH = "#/portfolio-web";
const BLOG_URL = "./blog/";
const LOGO_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_96/v1777219173/Black_and_White_Chauffeur_Service_Logo_3_l1nr8n.png";

type AppView = "home" | "portfolio";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Wanda",
    role: "CEO & Founder · Desarrollo web y digitalizacion",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_800/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
    description:
      "Desarrolladora web con enfoque en el usuario, combinando creatividad y logica para crear soluciones digitales atractivas y funcionales. Especialista en marketing digital, soporte administrativo colaborativo y digitalizacion de procesos.",
  },
  {
    id: 2,
    name: "Alejandro",
    role: "CEO & Founder · Consultoria de negocios y marketing",
    image:
      "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_800/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
    description:
      "Consultor digital con experiencia en desarrollo de negocios, finanzas y gestion de redes sociales.",
  },
];

const services: Service[] = [
  {
    title: "Estrategia y marketing digital",
    icon: BarChart3,
    eyebrow: "Posicionamiento y conversion",
    description:
      "Definimos la estrategia, optimizamos tu presencia online y ejecutamos acciones de marketing y SEO para atraer, posicionar y convertir de forma constante.",
    highlights: [
      "Diagnostico de presencia digital y objetivos",
      "SEO y marketing orientados a visibilidad real",
      "Acciones pensadas para atraer y convertir",
    ],
  },
  {
    title: "Desarrollo web",
    icon: Globe,
    eyebrow: "Sitios que se ven bien y funcionan mejor",
    description:
      "Desarrollamos contigo un sitio alineado a tu negocio, optimizado para rendir, intuitivo y dinamico, preparado para crecer contigo.",
    highlights: [
      "Estructura clara y experiencia enfocada en conversion",
      "Rendimiento, adaptabilidad y escalabilidad",
      "Diseno web alineado con tus objetivos comerciales",
    ],
    samples: [
      {
        title: "Ecomercia",
        src: "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1400/v1776777711/eccomercia_demo_gxjw03.png",
        kind: "image",
        caption: "Tienda online con estructura clara, jerarquia visual limpia y foco en conversion.",
        url: "https://ecomerio.com/",
      },
      {
        title: "Sanital",
        src: "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1400/v1776777711/sanital_sample_x5lr4j.png",
        kind: "image",
        caption: "Demo funcional con navegacion fluida y una experiencia mas dinamica del producto.",
        url: "https://sanital.ca/",
      },
      {
        title: "Multicolor",
        src: "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1400/v1776777711/multicolor_sample_rc4bdo.png",
        kind: "image",
        caption: "Landing de marca con composicion visual mas atrevida y un tono mas editorial.",
        url: "https://multicolor.ind.br/es/",
      },
      {
        title: "Ropero Solidario",
        src: "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1400/v1776777711/ropero_solidario_sample_ocvsqz.png",
        kind: "image",
        caption: "Sitio informativo con lectura amable, narrativa visual y estructura pensada para confianza.",
        url: "https://roperosolidario.walkredi.org/",
      },
    ],
  },
  {
    title: "Automatizacion de procesos y asistencia administrativa",
    icon: Users,
    eyebrow: "Orden interno para operar mejor",
    description:
      "Te acompanamos a optimizar tus procesos y organizar la gestion administrativa de tu negocio. Automatizamos tareas y ponemos orden para que todo fluya mejor, cada dia.",
    highlights: [
      "Optimizacion de flujos operativos y tareas repetitivas",
      "Gestion administrativa mas clara y sostenible",
      "Menos friccion y mas tiempo para enfocarte en crecer",
    ],
  },
  {
    title: "Gestion de redes sociales",
    icon: Layout,
    eyebrow: "Conexion constante con tu audiencia",
    description:
      "Gestionamos contigo tus redes con una estrategia clara, contenido relevante y enfoque en conectar con tu audiencia y generar resultados.",
    highlights: [
      "Plan de contenido con enfoque en negocio",
      "Mensajes coherentes con tu marca y tu publico",
      "Seguimiento para crecer con consistencia",
    ],
  },
];

const stats: Stat[] = [
  {
    value: 81,
    suffix: "%",
    label: "de clientes investigan online antes de decidir",
    icon: Search,
  },
  {
    value: 2.5,
    suffix: "x",
    label: "mas oportunidades con presencia digital",
    icon: TrendingUp,
  },
  {
    value: 70,
    suffix: "%",
    label: "prefieren negocios visibles en internet",
    icon: Eye,
  },
];

const marqueeItems = [
  "Branding",
  "Paginas web",
  "Tiendas online",
  "SEO",
  "Contenido",
  "UX",
  "Ads",
  "Social media",
];

function Reveal({ children, className, delay = 0, distance = 32 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

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

function MarqueeBand() {
  const shouldReduceMotion = useReducedMotion();
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-label="Especialidades" className="relative z-10 mx-auto w-full max-w-7xl px-6">
      <Reveal className="mb-6 text-center" distance={18}>
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200/70">
          Te mantenemos en linea
        </p>
      </Reveal>

      <div className="brand-marquee rounded-full border border-white/10 bg-white/[0.04] py-4 shadow-[0_30px_90px_rgba(15,23,42,0.28)] backdrop-blur-md">
        <div className={`brand-marquee-track ${shouldReduceMotion ? "brand-marquee-track-static" : ""}`}>
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="brand-chip">
              <span className="brand-chip-dot" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
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
        width={800}
        height={800}
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
          alt="Equipo de En Linea Digital trabajando en soluciones para pequenos negocios"
          width={1280}
          height={1280}
          className="h-full min-h-72 w-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 50vw, 100vw"
        />

        <div className="max-h-[80vh] overflow-y-auto p-6 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Quienes somos
          </p>
          <h2 id={titleId} className="mt-3 text-3xl font-bold text-white">
            En Linea Digital
          </h2>

          <div
            id={descriptionId}
            className="mt-6 space-y-5 text-sm leading-7 text-gray-200 md:text-base"
          >
            <p>
              En En Linea Digital somos dos especialistas en marketing digital enfocados en ayudar
              a pequenos negocios a dar el salto al mundo online. Sabemos que muchos negocios aun no
              tienen presencia digital, y eso hoy significa perder oportunidades reales de
              crecimiento.
            </p>
            <p>
              Actualmente, mas del 80% de los clientes realiza busquedas en internet antes de tomar
              una decision de compra. Si tu negocio no esta presente, simplemente no existe para una
              gran parte de tu mercado.
            </p>
            <p>
              Nuestra mision es clara: digitalizar tu negocio de forma sencilla, efectiva y sin
              complicaciones. Creamos tu presencia online para que te encuentren, te elijan y puedas
              convertir visitas en clientes.
            </p>
            <p>
              Te acompanamos en todo el proceso, desde la creacion de tu imagen digital hasta la
              optimizacion de tu visibilidad, con soluciones adaptadas a tus necesidades y a tu
              nivel de digitalizacion.
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

function getViewFromHash(hash: string): AppView {
  return hash.startsWith(WEB_PORTFOLIO_HASH) ? "portfolio" : "home";
}

function getSectionTargetFromHash(hash: string) {
  if (!hash.startsWith("#") || hash.startsWith("#/")) {
    return null;
  }

  return hash.slice(1) || null;
}

function PortfolioPage({ service }: { service: Service }) {
  return (
    <main className="bg-[#020617] pb-24">
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-14 md:pt-20">
        <Reveal>
          <div className="max-w-5xl">
            <p className="mt-0 text-xs font-semibold uppercase tracking-[0.34em] text-sky-200/72">
              Portfolio web
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-6 md:-mt-3">
        <Reveal>
          <Suspense fallback={<div className="min-h-[24rem]" aria-hidden="true" />}>
            <PortfolioGallery samples={service.samples ?? []} />
          </Suspense>
        </Reveal>
      </section>

      <section className="relative z-10 mx-auto mt-18 max-w-4xl px-6">
        <Reveal>
          <div className="border-t border-white/10 pt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200/70">
              Siguiente paso
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Nos encargamos de la web de tu negocio.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Podemos crear una web alineada con tu marca, tu oferta y la forma en que quieres
              convertir visitas en clientes.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_START_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-300/24 bg-sky-300/10 px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Quiero una web asi
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 px-8 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:border-white/24 hover:bg-white/[0.04]"
              >
                Volver a servicios
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default function App() {
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [view, setView] = useState<AppView>(() => getViewFromHash(window.location.hash));
  const [blogFooterArticles, setBlogFooterArticles] = useState<BlogFooterArticle[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const portfolioService = services.find((service) => service.samples?.length);

  useEffect(() => {
    const syncView = () => {
      setView(getViewFromHash(window.location.hash));
      setMobileMenuOpen(false);
    };
    window.addEventListener("hashchange", syncView);
    return () => window.removeEventListener("hashchange", syncView);
  }, []);

  useEffect(() => {
    if (view === "portfolio") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    const targetId = getSectionTargetFromHash(window.location.hash);
    if (!targetId) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [view]);

  useEffect(() => {
    let isMounted = true;

    const loadBlogFooterArticles = async () => {
      try {
        const response = await fetch("./blog/articles.json");
        if (!response.ok) {
          throw new Error("No se pudieron cargar los articulos del blog.");
        }

        const data: unknown = await response.json();
        if (!Array.isArray(data)) {
          return;
        }

        const articles = data
          .filter((item): item is BlogFooterArticle => {
            return (
              typeof item === "object" &&
              item !== null &&
              "slug" in item &&
              "title" in item &&
              "updatedAt" in item &&
              typeof item.slug === "string" &&
              typeof item.title === "string" &&
              typeof item.updatedAt === "string"
            );
          })
          .sort((left, right) => Date.parse(right.updatedAt) - Date.parse(left.updatedAt))
          .slice(0, 4);

        if (isMounted) {
          setBlogFooterArticles(articles);
        }
      } catch {
        if (isMounted) {
          setBlogFooterArticles([]);
        }
      }
    };

    const timerId = window.setTimeout(() => {
      void loadBlogFooterArticles();
    }, 1200);

    return () => {
      isMounted = false;
      window.clearTimeout(timerId);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_20%),linear-gradient(180deg,#07111f_0%,#08111c_44%,#0a1422_100%)] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-8rem] top-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl animate-pulse"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-6rem] top-[28rem] h-96 w-96 rounded-full bg-blue-300/8 blur-3xl animate-pulse"
        />

        <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-slate-950/72 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a
              href="#inicio"
              className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
            >
              <img
                src={LOGO_URL}
                alt="Logotipo de En Linea Digital"
                className="h-16 w-auto"
                decoding="async"
                fetchPriority="high"
              />
              <span className="text-sm font-semibold tracking-[0.16em] text-white">
                Enlinea Digital
              </span>
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
              <a href="#servicios" className="font-medium transition duration-300 hover:text-white">
                Servicios
              </a>
              <a
                href={WEB_PORTFOLIO_HASH}
                className="font-medium transition duration-300 hover:text-white"
              >
                Portfolio
              </a>
              <a href={BLOG_URL} className="font-medium transition duration-300 hover:text-white">
                Blog
              </a>
              <a href="#equipo" className="font-medium transition duration-300 hover:text-white">
                Equipo
              </a>
              <a href="#contacto" className="font-medium transition duration-300 hover:text-white">
                Contacto
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((currentOpen) => !currentOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.045] text-white transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Cerrar menu principal" : "Abrir menu principal"}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp con Enlinea Digital"
              className="hidden rounded-full border border-white/12 bg-white/[0.045] px-5 py-2 text-sm text-white transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200 md:inline-flex"
            >
              Contactar por WhatsApp
            </a>
          </div>

          {mobileMenuOpen ? (
            <div className="border-t border-white/8 bg-slate-950/96 px-6 py-4 md:hidden">
              <nav aria-label="Principal movil" className="flex flex-col gap-2 text-sm text-slate-200">
                <a
                  href="#servicios"
                  className="rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  Servicios
                </a>
                <a
                  href={WEB_PORTFOLIO_HASH}
                  className="rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  Portfolio
                </a>
                <a
                  href={BLOG_URL}
                  className="rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  Blog
                </a>
                <a
                  href="#equipo"
                  className="rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  Equipo
                </a>
                <a
                  href="#contacto"
                  className="rounded-2xl px-4 py-3 transition duration-300 hover:bg-white/[0.05] hover:text-white"
                >
                  Contacto
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contactar por WhatsApp con Enlinea Digital"
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-sky-300/24 bg-sky-300/10 px-5 py-3 font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16"
                >
                  Contactar por WhatsApp
                </a>
              </nav>
            </div>
          ) : null}
        </header>

        {view === "portfolio" && portfolioService ? (
          <PortfolioPage service={portfolioService} />
        ) : (
          <main className="flex flex-col gap-24 pb-20 md:gap-28">
          <section id="inicio">
            <Hero />
          </section>

          <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-6">
            <Reveal>
              <div className="px-0 py-4 md:py-6">
                <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14">
                  <div className="overflow-hidden rounded-[1.75rem] bg-slate-950/50 shadow-[0_20px_70px_rgba(2,6,23,0.18)]">
                    <img
                      src={AGENCY_SECTION_IMAGE_URL}
                      alt="Visual de Enlinea Digital sobre presencia digital para negocios"
                      width={960}
                      height={1032}
                      className="h-auto w-full object-contain"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 42vw, 100vw"
                    />
                  </div>

                  <div className="text-center md:text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                      Agencia de servicios digitales dominicana
                    </p>
                    <h2 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white md:text-4xl">
                      Creamos tu presencia digital para que tu negocio se vea, conecte y convierta.
                    </h2>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 md:text-lg">
                      Somos una agencia de servicios digitales en Republica Dominicana enfocada en
                      paginas web, branding, SEO, contenido y marketing para negocios que necesitan
                      una presencia digital profesional.
                    </p>
                    <button
                      type="button"
                      onClick={() => setAboutOpen(true)}
                      className="mt-6 inline-flex items-center justify-center text-sm font-semibold text-cyan-200 underline decoration-cyan-300/60 underline-offset-4 transition duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300"
                    >
                      Ver mas
                    </button>
                    <div className="mt-5">
                      <a
                        href="#planes"
                        className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/8 px-5 py-3 text-sm font-semibold text-sky-100 transition duration-300 hover:border-sky-200/38 hover:bg-sky-300/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                      >
                        Ver planes y precios
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <MarqueeBand />

          <section
            id="servicios"
            aria-labelledby="servicios-title"
            className="services-section relative z-10 mx-auto max-w-6xl px-4 pb-4 sm:px-6"
          >
            <Reveal className="services-heading mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/72">
                Ofertas de servicios digitales
              </p>
              <h2
                id="servicios-title"
                className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
              >
                Servicios digitales para marcas y negocios en Republica Dominicana
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                Cada servicio responde a una necesidad concreta: atraer clientes, mejorar tu imagen,
                ordenar tu operacion y hacer que tu presencia digital sostenga el crecimiento.
              </p>
            </Reveal>

            <div className="mt-12 space-y-6 lg:space-y-7">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.08} distance={32}>
                  <article className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.2)] backdrop-blur-md sm:p-8 lg:p-10">
                    <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-10">
                      <div className="service-copy">
                        <div className="mb-6 flex items-center gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
                            <service.icon aria-hidden="true" size={28} />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/76">
                              {service.eyebrow}
                            </p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                              0{index + 1}
                            </p>
                          </div>
                        </div>

                        <h3 className="max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                          {service.title}
                        </h3>
                        <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                          {service.description}
                        </p>

                        {service.samples?.length ? (
                          <div className="mt-7">
                            <a
                              href={WEB_PORTFOLIO_HASH}
                              className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/8 px-5 py-3 text-sm font-semibold text-sky-100 transition duration-300 hover:border-sky-200/38 hover:bg-sky-300/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                            >
                              Ver ejemplos
                              <ArrowUpRight size={16} />
                            </a>
                          </div>
                        ) : null}
                      </div>

                      <div className="service-panel rounded-[1.7rem] border border-white/10 bg-slate-950/36 p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                          Lo que incluye
                        </p>
                        <ul className="mt-6 space-y-4">
                          {service.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                            >
                              <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" aria-hidden="true" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/78">
                          Explorar
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-10 text-center" delay={0.08} distance={22}>
              <a
                href="#planes"
                className="inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-300/8 px-6 py-3 text-sm font-semibold text-sky-100 transition duration-300 hover:border-sky-200/38 hover:bg-sky-300/12 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Ver planes y precios
                <ArrowUpRight size={16} />
              </a>
            </Reveal>
          </section>

          <section
            id="equipo"
            aria-labelledby="equipo-title"
            className={`relative z-10 px-6 py-10 text-center ${DEFERRED_SECTION_CLASS}`}
          >
            <Reveal className="mx-auto mb-16 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                Nuestro equipo
              </p>
            </Reveal>

            <div className="flex flex-wrap justify-center gap-10 lg:gap-12">
              {teamMembers.map((member, index) => (
                <Reveal key={member.id} delay={index * 0.12} distance={42}>
                  <m.button
                    type="button"
                    onClick={() => setSelected(member)}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="surface-card group w-full max-w-[340px] overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/[0.05] text-left backdrop-blur-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-300"
                  >
                    <div className="team-card-media">
                      <img
                        src={member.image}
                        alt={`Retrato de ${member.name}`}
                        width={800}
                        height={800}
                        className="team-card-image aspect-square w-full object-cover"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 768px) 340px, 100vw"
                      />
                      <div className="team-card-overlay" aria-hidden="true" />
                    </div>

                    <div className="p-7">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/80">
                          Ver perfil
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{member.role}</p>
                    </div>
                  </m.button>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="stats"
            aria-labelledby="stats-title"
            className={`relative z-10 mx-auto max-w-6xl px-6 py-10 ${DEFERRED_SECTION_CLASS}`}
          >
            <Reveal className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/70">
                Motivos para estar en linea
              </p>
              <h2 id="stats-title" className="mt-4 text-4xl font-bold text-white">
                Las estadisticas no mienten
              </h2>
            </Reveal>

            <div className="grid gap-8 text-center sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 0.1} distance={28}>
                  <div className="surface-card rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-9 backdrop-blur-sm">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/16 bg-cyan-300/10 text-cyan-200">
                        <stat.icon aria-hidden="true" size={22} />
                      </div>
                      <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-transparent" />
                    </div>
                    <p className="text-4xl font-bold text-white">
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-3 text-sm font-medium leading-6 text-gray-300">{stat.label}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.22em] text-slate-500">
                      Basado en tendencias digitales actuales
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <GrowthPlansSection ctaHref={WHATSAPP_START_URL} />

          <section
            id="contacto"
            aria-labelledby="contacto-title"
            className={`relative z-10 mx-auto max-w-4xl px-6 ${DEFERRED_SECTION_CLASS}`}
          >
            <Reveal>
              <div className="cta-panel overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] px-6 py-16 text-center shadow-[0_30px_120px_rgba(15,23,42,0.32)] backdrop-blur-md md:px-10 md:py-18">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                  Ponte enlinea
                </p>
                <h2 id="contacto-title" className="mt-4 text-4xl font-bold text-white">
                  Haz crecer tu negocio en digital
                </h2>
                <p className="mx-auto mb-9 mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                  Te ayudamos a crecer con una estrategia clara, herramientas adecuadas y acciones
                  que realmente generen resultados.
                </p>

                <a
                  href={WHATSAPP_START_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-300/24 bg-sky-300/10 px-10 py-3 font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  Quiero empezar
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          </section>
          </main>
        )}

        <footer className={`relative z-10 mt-10 border-t border-white/10 bg-slate-950/70 ${DEFERRED_SECTION_CLASS}`}>
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] md:items-start">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/75">
                En Linea Digital
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Servicios digitales en Republica Dominicana.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Ayudamos a pequenos negocios a verse profesionales en internet, ganar visibilidad y
                convertir visitas en clientes.
              </p>

              {blogFooterArticles.length ? (
                <div className="mt-8 max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                    Blog
                  </p>
                  <ul className="mt-4 space-y-3">
                    {blogFooterArticles.map((article) => (
                      <li key={article.slug}>
                        <a
                          href={`${BLOG_URL}article.html?slug=${encodeURIComponent(article.slug)}`}
                          className="text-sm leading-6 text-cyan-200/90 transition duration-300 hover:text-white"
                        >
                          {article.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-6 text-sm text-gray-300 md:items-end">
              <nav aria-label="Footer" className="flex flex-wrap gap-5">
                <a href="#inicio" className="transition duration-300 hover:text-white">
                  Inicio
                </a>
                <a href={WEB_PORTFOLIO_HASH} className="transition duration-300 hover:text-white">
                  Portfolio
                </a>
                <a href={BLOG_URL} className="transition duration-300 hover:text-white">
                  Blog
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
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-cyan-200/50 hover:bg-white/5"
              >
                Hablar por WhatsApp
              </a>

              <p className="text-xs text-gray-500">© {currentYear} En Linea Digital</p>
            </div>
          </div>
        </footer>

        <AboutModal isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
        <TeamModal member={selected} isOpen={selected !== null} onClose={() => setSelected(null)} />
        <ChatFAQ />
      </div>
    </LazyMotion>
  );
}
