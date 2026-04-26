export type CitySlug = "santo-domingo" | "san-pedro-de-macoris" | "higuey";

type ServiceItem = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

type ExampleItem = {
  title: string;
  description: string;
};

type ChallengeItem = {
  title: string;
  description: string;
};

export type CityPageData = {
  city: string;
  slug: CitySlug;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introParagraphs: string[];
  challengeTitle: string;
  challengeIntro: string;
  challenges: ChallengeItem[];
  servicesHeading: string;
  servicesIntro: string;
  services: ServiceItem[];
  examplesHeading: string;
  examplesIntro: string;
  examples: ExampleItem[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonLabel: string;
};

export const marqueeItems = [
  "Branding",
  "Paginas web",
  "SEO local",
  "Google Business",
  "Contenido",
  "UX",
  "Automatizacion",
  "Social media",
];

export const cityPages: Record<CitySlug, CityPageData> = {
  "santo-domingo": {
    slug: "santo-domingo",
    city: "Santo Domingo",
    heroTitle: "Marketing digital en Santo Domingo para negocios que necesitan competir mejor online",
    heroSubtitle:
      "Ayudamos a negocios en Santo Domingo a mejorar su presencia en Google, sus redes sociales y su pagina web para destacar en un mercado mas rapido, mas exigente y cada vez mas digital.",
    introTitle:
      "En Santo Domingo no basta con existir: tu negocio necesita verse profesional, aparecer cuando te buscan y convertir visitas en clientes.",
    introParagraphs: [
      "En una ciudad donde hay mas competencia, mas ofertas y clientes comparando todo el tiempo, una presencia digital debil te saca de la conversacion antes de que empiece.",
      "En Linea Digital crea paginas web, contenido y automatizaciones para colmados, salones de belleza, restaurantes y pequenos negocios que necesitan vender con mas claridad y responder mas rapido.",
    ],
    challengeTitle: "Lo que mas frena a muchos negocios en Santo Domingo",
    challengeIntro:
      "Aunque la ciudad se mueve rapido en digital, todavia es comun encontrar negocios con presencia online incompleta o desordenada.",
    challenges: [
      {
        title: "No aparecer en Google cuando el cliente ya esta buscando",
        description:
          "Si tu negocio no sale en resultados locales o no tiene una web clara, la oportunidad se la lleva la competencia.",
      },
      {
        title: "Redes sociales activas pero sin estrategia",
        description:
          "Publicar sin una estructura clara genera alcance disperso, mensajes poco consistentes y menos conversion.",
      },
      {
        title: "Procesos lentos para responder y dar seguimiento",
        description:
          "Cuando todo depende de mensajes manuales, cotizaciones tardias o informacion repetida, se pierden ventas.",
      },
    ],
    servicesHeading: "Servicios digitales pensados para el ritmo comercial de Santo Domingo",
    servicesIntro:
      "Mantenemos la estructura de la landing original, pero adaptada a un mercado donde cada detalle visual y operativo pesa mas.",
    services: [
      {
        eyebrow: "Presencia y posicionamiento",
        title: "Marketing digital para negocios que compiten todos los dias",
        description:
          "Definimos una presencia digital mas clara para marcas que necesitan verse profesionales y destacar frente a otras opciones en Santo Domingo.",
        bullets: [
          "Mensajes orientados a captar clientes locales",
          "SEO local para aparecer en busquedas relevantes",
          "Contenido alineado con tu oferta y tu publico real",
        ],
      },
      {
        eyebrow: "Sitios que convierten",
        title: "Diseno web con enfoque en credibilidad y conversion",
        description:
          "Creamos paginas que ayudan a explicar mejor tu propuesta, mostrar tus servicios y facilitar el contacto sin friccion.",
        bullets: [
          "Estructura clara para servicios, reservas o consultas",
          "Jerarquia visual limpia para leer mejor la oferta",
          "Version movil pensada para consultas rapidas",
        ],
      },
      {
        eyebrow: "Operacion mas agil",
        title: "Automatizaciones que ahorran tiempo comercial",
        description:
          "Organizamos formularios, respuestas iniciales y flujos simples para que el negocio responda mejor sin depender de procesos manuales.",
        bullets: [
          "Captura de leads mejor organizada",
          "Seguimiento inicial mas rapido",
          "Menos friccion entre interes y cierre",
        ],
      },
      {
        eyebrow: "Consistencia de marca",
        title: "Redes sociales con direccion y coherencia",
        description:
          "No se trata solo de publicar: se trata de que tus redes ayuden a sostener la confianza que tu marca necesita en una ciudad competitiva.",
        bullets: [
          "Linea visual actual y profesional",
          "Mensajes adaptados al tipo de cliente urbano",
          "Contenido que conecta con decision de compra",
        ],
      },
    ],
    examplesHeading: "Ejemplos de negocios que pueden crecer mejor en Santo Domingo",
    examplesIntro:
      "Aplicamos estas soluciones en escenarios reales de la ciudad, donde la primera impresion y la rapidez de respuesta importan mucho.",
    examples: [
      {
        title: "Colmados con delivery y pedidos por WhatsApp",
        description:
          "Una web simple con catalogo, zonas de entrega y automatizacion de pedidos puede ordenar mejor la operacion diaria.",
      },
      {
        title: "Salones de belleza con agenda y promociones",
        description:
          "Una presencia digital clara ayuda a mostrar servicios, captar reservas y comunicar ofertas sin depender solo de historias.",
      },
      {
        title: "Restaurantes que necesitan verse bien y convertir mas",
        description:
          "Menus claros, ubicacion, horarios y reservas visibles hacen la diferencia cuando el cliente compara opciones rapido.",
      },
      {
        title: "Negocios pequenos que quieren profesionalizar su imagen",
        description:
          "Una web bien estructurada y una marca consistente elevan la percepcion y facilitan la venta desde el primer contacto.",
      },
    ],
    ctaTitle: "Si tienes un negocio en Santo Domingo, podemos ayudarte a competir con mas orden y mejor presencia digital.",
    ctaText:
      "Creamos una solucion alineada con tu mercado, tu ritmo comercial y la forma en que tus clientes te buscan hoy.",
    ctaButtonLabel: "Quiero mejorar mi presencia en Santo Domingo",
  },
  "san-pedro-de-macoris": {
    slug: "san-pedro-de-macoris",
    city: "San Pedro de Macoris",
    heroTitle:
      "Diseno web en San Pedro de Macoris para negocios que quieren aprovechar mejor lo digital",
    heroSubtitle:
      "En Linea Digital ayuda a negocios en San Pedro de Macoris a salir del rezago digital con paginas web claras, marketing local y automatizaciones practicas para vender mejor.",
    introTitle:
      "San Pedro de Macoris todavia tiene una gran oportunidad digital: muchos negocios no se ven bien online o simplemente no se encuentran.",
    introParagraphs: [
      "Eso no es una desventaja permanente; es una ventana de crecimiento para quienes se organizan primero y construyen una presencia digital profesional.",
      "Trabajamos con colmados, salones, restaurantes y negocios pequenos que quieren dejar de depender solo del boca a boca y empezar a captar clientes con una base digital mas solida.",
    ],
    challengeTitle: "Problemas comunes en negocios de San Pedro de Macoris",
    challengeIntro:
      "La baja digitalizacion deja espacio para crecer, pero tambien hace que muchos negocios pierdan oportunidades todos los dias.",
    challenges: [
      {
        title: "No tener pagina web o tener una que no explica nada",
        description:
          "Muchos negocios no cuentan con una base propia para presentar servicios, horarios, ubicacion o formas de contacto.",
      },
      {
        title: "Ausencia casi total en Google y mapas",
        description:
          "Si alguien busca una opcion local y no te encuentra, termina en otro negocio aunque tu oferta sea mejor.",
      },
      {
        title: "Gestion manual que consume tiempo y energia",
        description:
          "Preguntas repetidas, cotizaciones improvisadas y procesos internos poco claros limitan el crecimiento.",
      },
    ],
    servicesHeading: "Servicios digitales para negocios que quieren dar un paso firme en San Pedro de Macoris",
    servicesIntro:
      "El enfoque aqui no es complicar: es construir una base clara, util y sostenible para que tu negocio avance.",
    services: [
      {
        eyebrow: "Presencia inicial fuerte",
        title: "Paginas web para negocios que necesitan empezar bien",
        description:
          "Disenamos webs simples, actuales y funcionales para que tu negocio tenga una vitrina profesional y propia.",
        bullets: [
          "Informacion clara de servicios y contacto",
          "Presentacion confiable para nuevos clientes",
          "Estructura lista para seguir creciendo",
        ],
      },
      {
        eyebrow: "Visibilidad local",
        title: "Marketing digital pensado para captar en tu zona",
        description:
          "Trabajamos tu presencia para que te encuentren mejor y para que tu mensaje conecte con el tipo de cliente que ya existe en la ciudad.",
        bullets: [
          "Textos enfocados en busquedas locales",
          "Mejor base para aparecer en Google",
          "Contenido mas claro para redes sociales",
        ],
      },
      {
        eyebrow: "Menos carga operativa",
        title: "Automatizacion practica para negocios pequenos",
        description:
          "No necesitas sistemas complejos para mejorar: pequenas automatizaciones bien pensadas ya liberan tiempo y ordenan procesos.",
        bullets: [
          "Formularios y respuestas iniciales automatizadas",
          "Mejor seguimiento a contactos interesados",
          "Mas orden sin complicar la operacion",
        ],
      },
      {
        eyebrow: "Imagen mas profesional",
        title: "UX y UI actual para generar confianza",
        description:
          "Una imagen digital bien cuidada ayuda a que el negocio se vea serio, claro y listo para atender mejor.",
        bullets: [
          "Diseno actual y facil de usar",
          "Experiencia clara en movil",
          "Presentacion mas alineada con lo que vendes",
        ],
      },
    ],
    examplesHeading: "Ejemplos locales donde la digitalizacion puede marcar diferencia",
    examplesIntro:
      "En San Pedro de Macoris hay mucho espacio para que negocios tradicionales mejoren su forma de captar y atender clientes.",
    examples: [
      {
        title: "Colmados que quieren recibir mas pedidos con orden",
        description:
          "Una pagina sencilla con productos clave, numero visible y formulario rapido puede mejorar el flujo diario.",
      },
      {
        title: "Salones de belleza que dependen solo de mensajes sueltos",
        description:
          "Una web con servicios, precios orientativos y reserva por WhatsApp ayuda a profesionalizar la experiencia.",
      },
      {
        title: "Restaurantes que todavia no muestran bien su propuesta",
        description:
          "Tener menu, ubicacion, horarios y contacto en un solo lugar hace que decidir sea mas facil para el cliente.",
      },
      {
        title: "Negocios pequenos que quieren empezar a crecer con base",
        description:
          "Cuando se ordena la presencia digital desde el inicio, el negocio puede crecer sin improvisar cada paso.",
      },
    ],
    ctaTitle:
      "Si tienes un negocio en San Pedro de Macoris, este es un buen momento para construir tu presencia digital desde una base clara.",
    ctaText:
      "Podemos ayudarte a pasar de la baja digitalizacion a una estructura mas profesional, util y enfocada en resultados.",
    ctaButtonLabel: "Quiero digitalizar mi negocio en San Pedro de Macoris",
  },
  higuey: {
    slug: "higuey",
    city: "Higuey",
    heroTitle: "Marketing digital en Higuey para negocios que quieren conectar con clientes locales y visitantes",
    heroSubtitle:
      "Creamos paginas web, presencia en Google y automatizaciones para negocios en Higuey que necesitan comunicar mejor su valor en una ciudad influenciada por el turismo y el movimiento comercial constante.",
    introTitle:
      "En Higuey la presencia digital tiene que hablarle tanto al cliente local como al que llega buscando opciones confiables cerca.",
    introParagraphs: [
      "Cuando un negocio no aparece bien en Google, no tiene una web clara o sus redes no explican lo suficiente, pierde oportunidades frente a opciones mejor presentadas.",
      "En Linea Digital ayuda a restaurantes, salones, colmados y pequenos negocios a verse actuales, faciles de usar y listos para convertir consultas en ventas.",
    ],
    challengeTitle: "Retos digitales frecuentes para negocios en Higuey",
    challengeIntro:
      "La influencia del turismo y el flujo mixto de clientes exige una comunicacion mas clara, rapida y visual.",
    challenges: [
      {
        title: "Informacion dispersa para clientes que quieren decidir rapido",
        description:
          "Si horarios, ubicacion, servicios o contacto no estan claros, el cliente se va a otra opcion antes de preguntar.",
      },
      {
        title: "Redes sociales que muestran pero no convierten",
        description:
          "Fotos sin estructura, textos sin direccion y poca claridad en la oferta reducen la confianza y el interes.",
      },
      {
        title: "Falta de sistemas simples para atender mejor",
        description:
          "Negocios con buen potencial pierden tiempo respondiendo lo mismo y sin procesos digitales que les ayuden.",
      },
    ],
    servicesHeading: "Soluciones digitales para negocios de Higuey con un publico mixto y mas movimiento comercial",
    servicesIntro:
      "La estrategia en Higuey necesita claridad visual, buena experiencia movil y capacidad de responder rapido.",
    services: [
      {
        eyebrow: "Busqueda y descubrimiento",
        title: "Marketing digital para aparecer mejor cuando te necesitan",
        description:
          "Optimizamos tu presencia para que clientes locales y visitantes entiendan rapido que haces, donde estas y como contactarte.",
        bullets: [
          "Mensajes claros para decision rapida",
          "Mayor orden en la presencia local",
          "Base mas fuerte para busquedas en Google",
        ],
      },
      {
        eyebrow: "Web pensada para conversion",
        title: "Diseno web enfocado en claridad y confianza",
        description:
          "Tu pagina debe explicar la oferta, mostrar credibilidad y facilitar el siguiente paso sin complicaciones.",
        bullets: [
          "Navegacion simple y visual",
          "Contenido facil de entender en movil",
          "Presentacion profesional de servicios y negocio",
        ],
      },
      {
        eyebrow: "Procesos internos",
        title: "Automatizaciones para responder mejor y mas rapido",
        description:
          "Organizamos formularios, consultas iniciales y seguimiento para que atender no dependa de repetir tareas manuales.",
        bullets: [
          "Mejor captura de consultas",
          "Flujos mas ordenados para seguimiento",
          "Ahorro de tiempo en tareas repetitivas",
        ],
      },
      {
        eyebrow: "Imagen y experiencia",
        title: "UX y UI actuales para marcas que quieren verse premium",
        description:
          "Construimos interfaces claras, limpias y actuales para que el negocio proyecte confianza desde el primer vistazo.",
        bullets: [
          "Diseno editorial y actual",
          "Experiencia mas intuitiva para usuarios nuevos",
          "Coherencia entre marca, web y redes",
        ],
      },
    ],
    examplesHeading: "Ejemplos de negocios en Higuey que pueden ganar mucho con mejor presencia digital",
    examplesIntro:
      "En una ciudad con movimiento local y visitantes, la claridad en la propuesta y la accesibilidad importan mas.",
    examples: [
      {
        title: "Restaurantes que reciben publico local y de paso",
        description:
          "Una web con menu, ubicacion, horario y contacto visible facilita que te elijan sin tener que buscar de mas.",
      },
      {
        title: "Salones de belleza que necesitan mostrar servicios con mas orden",
        description:
          "La combinacion de imagen profesional, reserva facil y mensajes claros mejora la decision del cliente.",
      },
      {
        title: "Colmados y negocios de cercania con servicio rapido",
        description:
          "Un sistema sencillo para consultas y pedidos ayuda a atender mejor en momentos de alta demanda.",
      },
      {
        title: "Negocios pequenos que quieren verse listos para crecer",
        description:
          "Una presencia digital bien pensada permite comunicar mejor el valor y sostener el crecimiento sin improvisar.",
      },
    ],
    ctaTitle: "Si tienes un negocio en Higuey, podemos ayudarte a construir una presencia digital clara, actual y lista para convertir mejor.",
    ctaText:
      "Disenamos una solucion adaptada a tu negocio, a tu publico y al contexto comercial particular de Higuey.",
    ctaButtonLabel: "Quiero mejorar mi marketing digital en Higuey",
  },
};
