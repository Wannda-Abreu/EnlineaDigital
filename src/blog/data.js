export const DEFAULT_UPDATED_AT = "2026-04-23T10:00:00.000Z";

export function createCoverDataUrl(title, accentA, accentB) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accentA}" />
          <stop offset="100%" stop-color="${accentB}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" rx="40" fill="url(#bg)" />
      <circle cx="1280" cy="180" r="220" fill="rgba(255,255,255,0.08)" />
      <circle cx="260" cy="720" r="280" fill="rgba(255,255,255,0.05)" />
      <text x="120" y="420" fill="#f8fafc" font-family="Segoe UI, sans-serif" font-size="86" font-weight="700">
        ${title}
      </text>
      <text x="120" y="500" fill="rgba(248,250,252,0.76)" font-family="Segoe UI, sans-serif" font-size="32">
        En Linea Digital Blog
      </text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export function createFallbackCoverImage(title) {
  return createCoverDataUrl(title, "#0f172a", "#0ea5e9");
}

export const defaultArticles = [
  {
    id: "blog-presencia-google",
    slug: "como-mejorar-la-presencia-de-tu-negocio-en-google",
    title: "Como mejorar la presencia de tu negocio en Google sin complicarte",
    excerpt:
      "Tener una web clara, informacion consistente y una base local bien trabajada ayuda a que tu negocio aparezca mejor cuando un cliente ya esta buscando.",
    metaDescription:
      "Guia practica para mejorar la presencia de un negocio en Google con una web clara, SEO local y mejor estructura digital.",
    coverImage: createCoverDataUrl(
      "Presencia en Google",
      "#0f172a",
      "#0ea5e9",
    ),
    content: `
      <h2>Por que muchos negocios no aparecen cuando mas los necesitan</h2>
      <p>En muchos casos el problema no es la falta de calidad del negocio, sino una presencia digital incompleta. Si no hay una pagina clara, informacion local bien organizada y una estructura minima para buscadores, el cliente termina en otra opcion.</p>
      <p>Una base digital bien hecha ayuda a explicar servicios, mostrar confianza y facilitar el siguiente paso sin friccion.</p>
      <h2>Que conviene revisar primero</h2>
      <p>Empieza por una web simple, rapida y facil de entender. Luego revisa textos, titulos, ubicacion, servicios, horarios y llamadas a la accion. Todo debe estar alineado con lo que el cliente espera encontrar cuando busca.</p>
    `,
    updatedAt: DEFAULT_UPDATED_AT,
  },
  {
    id: "blog-web-negocio-pequeno",
    slug: "que-debe-tener-una-web-para-un-negocio-pequeno",
    title: "Que debe tener una web para un negocio pequeno que quiere vender mejor",
    excerpt:
      "Una web efectiva no necesita ser compleja: necesita explicar bien la oferta, verse profesional y facilitar la accion que esperas del cliente.",
    metaDescription:
      "Elementos clave de una pagina web para pequenos negocios: estructura, claridad, conversion, experiencia movil y confianza.",
    coverImage: createCoverDataUrl(
      "Web para negocio pequeno",
      "#111827",
      "#7c3aed",
    ),
    content: `
      <h2>Una web no es solo una tarjeta digital</h2>
      <p>Cuando una pagina esta bien planteada, ayuda a vender mejor. Debe responder preguntas, mostrar servicios, reducir dudas y hacer que contactar sea facil desde el movil.</p>
      <p>La experiencia del usuario importa mucho: estructura clara, titulos bien escritos, llamadas a la accion visibles y una carga rapida.</p>
      <h2>Lo minimo que no deberia faltar</h2>
      <p>Tu propuesta, tus servicios, una seccion de confianza, contacto claro y un recorrido sencillo. Si ademas integras formularios o automatizaciones basicas, puedes responder mas rapido y trabajar con mas orden.</p>
    `,
    updatedAt: DEFAULT_UPDATED_AT,
  },
  {
    id: "blog-automatizaciones",
    slug: "automatizaciones-simples-para-negocios-pequenos",
    title: "Automatizaciones simples para negocios pequenos que quieren ahorrar tiempo",
    excerpt:
      "Pequenas automatizaciones bien pensadas pueden ayudarte a responder mejor, reducir tareas repetitivas y ordenar tu operacion sin sistemas complejos.",
    metaDescription:
      "Ideas de automatizacion para pequenos negocios: formularios, respuestas iniciales, captacion de leads y organizacion comercial.",
    coverImage: createCoverDataUrl(
      "Automatizaciones",
      "#082f49",
      "#0f766e",
    ),
    content: `
      <h2>Automatizar no siempre significa complicar</h2>
      <p>Muchos negocios pequenos pueden mejorar bastante con ajustes sencillos: formularios mejor pensados, respuestas iniciales automáticas y pasos mas claros para dar seguimiento a cada consulta.</p>
      <p>El objetivo no es reemplazar el trato humano, sino liberar tiempo para atender mejor lo importante.</p>
      <h2>Donde se nota primero el cambio</h2>
      <p>Cuando disminuyen los mensajes repetidos, se ordena la informacion y cada nuevo contacto llega con mas contexto, el negocio gana eficiencia y responde con mas seguridad.</p>
    `,
    updatedAt: DEFAULT_UPDATED_AT,
  },
];
