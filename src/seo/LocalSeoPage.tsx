import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Globe,
  Layout,
  MapPin,
  Search,
  Store,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import LocalSeoHero from "./LocalSeoHero";
import { cityPages, marqueeItems, type CitySlug } from "./cityData";

const WHATSAPP_URL = "https://wa.me/18091234567";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
};

type ServiceCard = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

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
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}

function MarqueeBand() {
  const shouldReduceMotion = useReducedMotion();
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-label="Especialidades" className="relative z-10 mx-auto w-full max-w-7xl px-6">
      <Reveal className="mb-6 text-center" distance={18}>
        <p className="text-xs font-semibold uppercase tracking-[0.36em] text-cyan-200/70">
          Servicios para crecer en tu ciudad
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

function getWhatsappStartUrl(message: string) {
  return `https://wa.me/18091234567?text=${encodeURIComponent(message)}`;
}

export default function LocalSeoPage({ city }: { city: CitySlug }) {
  const page = cityPages[city];
  const serviceIcons = [BarChart3, Globe, Users, Layout];
  const services: ServiceCard[] = page.services.map((service, index) => ({
    ...service,
    icon: serviceIcons[index] ?? Globe,
  }));
  const whatsappStartUrl = getWhatsappStartUrl(
    `Hola Enlinea Digital, quiero informacion sobre ${page.city}.`,
  );

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
                src="https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_96/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png"
                alt="Logotipo de En Linea Digital"
                width={96}
                height={96}
                className="h-8 w-8 object-contain"
                decoding="async"
                fetchPriority="high"
              />
              <span className="text-sm font-semibold tracking-[0.28em] text-slate-100">
                ENLINEA DIGITAL
              </span>
            </a>

            <nav aria-label="Principal" className="hidden items-center gap-8 text-sm text-gray-200 md:flex">
              <a href="#servicios" className="font-medium transition duration-300 hover:text-white">
                Servicios
              </a>
              <a href="#retos" className="font-medium transition duration-300 hover:text-white">
                Retos
              </a>
              <a href="#ejemplos" className="font-medium transition duration-300 hover:text-white">
                Ejemplos
              </a>
              <a href="#contacto" className="font-medium transition duration-300 hover:text-white">
                Contacto
              </a>
            </nav>

            <a
              href={whatsappStartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/12 bg-white/[0.045] px-5 py-2 text-sm text-white transition duration-300 hover:border-sky-200/35 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
            >
              Empezar
            </a>
          </div>
        </header>

        <main className="flex flex-col gap-24 pb-20 md:gap-28">
          <section id="inicio">
            <LocalSeoHero title={page.heroTitle} subtitle={page.heroSubtitle} />
          </section>

          <section className="relative z-10 mx-auto -mt-8 max-w-5xl px-6">
            <Reveal>
              <div className="rounded-[2.15rem] border border-white/10 bg-white/[0.05] px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.2)] backdrop-blur-md md:px-12 md:py-12">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-200/70">
                  Agencia de servicios digitales para {page.city}
                </p>
                <h2 className="mt-5 text-2xl font-bold text-white md:text-4xl">
                  {page.introTitle}
                </h2>
                {page.introParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-300 md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          </section>

          <MarqueeBand />

          <section
            id="retos"
            aria-labelledby="retos-title"
            className="relative z-10 mx-auto max-w-6xl px-6"
          >
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/72">
                Problemas reales
              </p>
              <h2 id="retos-title" className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {page.challengeTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                {page.challengeIntro}
              </p>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {page.challenges.map((challenge, index) => (
                <Reveal key={challenge.title} delay={index * 0.08} distance={28}>
                  <article className="surface-card rounded-[1.85rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
                      {index === 0 ? <Search size={26} /> : index === 1 ? <Layout size={26} /> : <MapPin size={26} />}
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{challenge.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">{challenge.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

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
                {page.servicesHeading}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                {page.servicesIntro}
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
                      </div>

                      <div className="service-panel rounded-[1.7rem] border border-white/10 bg-slate-950/36 p-6 sm:p-7">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                          Lo que incluye
                        </p>
                        <ul className="mt-6 space-y-4">
                          {service.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 text-sm leading-7 text-slate-300"
                            >
                              <span
                                className="mt-2 h-2 w-2 rounded-full bg-cyan-300"
                                aria-hidden="true"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                        <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/78">
                          Enfoque local
                          <ArrowUpRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="ejemplos"
            aria-labelledby="ejemplos-title"
            className="relative z-10 mx-auto max-w-6xl px-6"
          >
            <Reveal className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/70">
                Ejemplos locales
              </p>
              <h2 id="ejemplos-title" className="mt-4 text-4xl font-bold text-white">
                {page.examplesHeading}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">
                {page.examplesIntro}
              </p>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {page.examples.map((example, index) => (
                <Reveal key={example.title} delay={index * 0.08} distance={28}>
                  <article className="surface-card rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-cyan-200">
                        {index % 2 === 0 ? <Store size={24} /> : <MapPin size={24} />}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{example.title}</h3>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-slate-300">{example.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="contacto"
            aria-labelledby="contacto-title"
            className="relative z-10 mx-auto max-w-4xl px-6"
          >
            <Reveal>
              <div className="cta-panel overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05] px-6 py-16 text-center shadow-[0_30px_120px_rgba(15,23,42,0.32)] backdrop-blur-md md:px-10 md:py-18">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/70">
                  {page.city}
                </p>
                <h2 id="contacto-title" className="mt-4 text-4xl font-bold text-white">
                  {page.ctaTitle}
                </h2>
                <p className="mx-auto mb-9 mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
                  {page.ctaText}
                </p>

                <a
                  href={whatsappStartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-sky-300/24 bg-sky-300/10 px-10 py-3 font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                >
                  {page.ctaButtonLabel}
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </Reveal>
          </section>
        </main>

        <footer className="relative z-10 mt-10 border-t border-white/10 bg-slate-950/70">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-md">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/75">
                En Linea Digital
              </p>
              <p className="mt-3 text-lg font-semibold text-white">
                Servicios digitales en {page.city}.
              </p>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Ayudamos a pequenos negocios a verse profesionales en internet, ganar visibilidad y
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
                <a href="#retos" className="transition duration-300 hover:text-white">
                  Retos
                </a>
                <a href="#contacto" className="transition duration-300 hover:text-white">
                  Contacto
                </a>
              </nav>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:border-cyan-200/50 hover:bg-white/5"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </div>
    </LazyMotion>
  );
}
