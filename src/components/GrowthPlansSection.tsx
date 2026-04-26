const growthPlans = [
  {
    title: "Presencia Inicial",
    price: "Desde RD$35,000",
    items: [
      "Landing page (1 seccion)",
      "Diseno responsive",
      "Boton WhatsApp o formulario",
      "Creacion de Instagram y Facebook",
      "Configuracion profesional",
    ],
    cta: "Empezar ahora",
  },
  {
    title: "Presencia Digital",
    price: "Desde RD$55,000 + RD$8,000/mes",
    items: [
      "Pagina web (3 paginas)",
      "SEO basico",
      "Integracion WhatsApp",
      "Base para captar clientes",
    ],
    cta: "Quiero empezar",
  },
  {
    title: "Crecimiento Digital",
    price: "Desde RD$75,000 + RD$15,000/mes",
    items: [
      "Web mas completa",
      "Estrategia de contenido",
      "Gestion de redes",
      "Optimizacion continua",
    ],
    cta: "Ver detalles",
  },
  {
    title: "Escala Digital",
    price: "Desde RD$110,000 + RD$25,000/mes",
    items: [
      "Web avanzada o ecommerce",
      "Marketing + redes sociales",
      "Campanas y estrategia",
      "Enfoque en resultados",
    ],
    cta: "Escalar mi negocio",
  },
] as const;

type GrowthPlansSectionProps = {
  ctaHref: string;
};

export default function GrowthPlansSection({
  ctaHref,
}: GrowthPlansSectionProps) {
  return (
    <section
      id="planes"
      aria-labelledby="planes-title"
      className="relative z-10 mx-auto max-w-6xl px-6 py-10"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-200/72">
          Planes digitales
        </p>
        <h2 id="planes-title" className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Planes para poner tu negocio en linea y hacerlo crecer
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
          Tambien puedes contratar servicios individuales segun lo que necesite tu negocio.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {growthPlans.map((plan) => (
          <article
            key={plan.title}
            className="flex h-full flex-col rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 shadow-sm backdrop-blur-sm"
          >
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-200/72">
                Plan
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{plan.title}</h3>
              <p className="mt-4 text-lg font-semibold text-cyan-200">{plan.price}</p>
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-300">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 rounded-full bg-cyan-300"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              <a
                href={ctaHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-sky-300/24 bg-sky-300/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-sky-200/45 hover:bg-sky-300/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                {plan.cta}
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 border-t border-white/10 pt-8 text-center">
        <p className="mx-auto max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
          ¿Necesitas algo especifico? Puedes contratar servicios individuales como paginas web,
          SEO, branding o gestion de redes.
        </p>
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-white/12 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:border-white/24 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
        >
          Contactanos
        </a>
      </div>
    </section>
  );
}
