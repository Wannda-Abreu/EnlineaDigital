var e=`2026-04-23T10:00:00.000Z`;function t(e,t,n){let r=`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${t}" />
          <stop offset="100%" stop-color="${n}" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" rx="40" fill="url(#bg)" />
      <circle cx="1280" cy="180" r="220" fill="rgba(255,255,255,0.08)" />
      <circle cx="260" cy="720" r="280" fill="rgba(255,255,255,0.05)" />
      <text x="120" y="420" fill="#f8fafc" font-family="Segoe UI, sans-serif" font-size="86" font-weight="700">
        ${e}
      </text>
      <text x="120" y="500" fill="rgba(248,250,252,0.76)" font-family="Segoe UI, sans-serif" font-size="32">
        En Linea Digital Blog
      </text>
    </svg>
  `;return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(r)}`}function n(e){return t(e,`#0f172a`,`#0ea5e9`)}var r=[{id:`blog-presencia-google`,slug:`como-mejorar-la-presencia-de-tu-negocio-en-google`,title:`Como mejorar la presencia de tu negocio en Google sin complicarte`,excerpt:`Tener una web clara, informacion consistente y una base local bien trabajada ayuda a que tu negocio aparezca mejor cuando un cliente ya esta buscando.`,metaDescription:`Guia practica para mejorar la presencia de un negocio en Google con una web clara, SEO local y mejor estructura digital.`,coverImage:t(`Presencia en Google`,`#0f172a`,`#0ea5e9`),content:`
      <h2>Por que muchos negocios no aparecen cuando mas los necesitan</h2>
      <p>En muchos casos el problema no es la falta de calidad del negocio, sino una presencia digital incompleta. Si no hay una pagina clara, informacion local bien organizada y una estructura minima para buscadores, el cliente termina en otra opcion.</p>
      <p>Una base digital bien hecha ayuda a explicar servicios, mostrar confianza y facilitar el siguiente paso sin friccion.</p>
      <h2>Que conviene revisar primero</h2>
      <p>Empieza por una web simple, rapida y facil de entender. Luego revisa textos, titulos, ubicacion, servicios, horarios y llamadas a la accion. Todo debe estar alineado con lo que el cliente espera encontrar cuando busca.</p>
    `,updatedAt:e},{id:`blog-web-negocio-pequeno`,slug:`que-debe-tener-una-web-para-un-negocio-pequeno`,title:`Que debe tener una web para un negocio pequeno que quiere vender mejor`,excerpt:`Una web efectiva no necesita ser compleja: necesita explicar bien la oferta, verse profesional y facilitar la accion que esperas del cliente.`,metaDescription:`Elementos clave de una pagina web para pequenos negocios: estructura, claridad, conversion, experiencia movil y confianza.`,coverImage:t(`Web para negocio pequeno`,`#111827`,`#7c3aed`),content:`
      <h2>Una web no es solo una tarjeta digital</h2>
      <p>Cuando una pagina esta bien planteada, ayuda a vender mejor. Debe responder preguntas, mostrar servicios, reducir dudas y hacer que contactar sea facil desde el movil.</p>
      <p>La experiencia del usuario importa mucho: estructura clara, titulos bien escritos, llamadas a la accion visibles y una carga rapida.</p>
      <h2>Lo minimo que no deberia faltar</h2>
      <p>Tu propuesta, tus servicios, una seccion de confianza, contacto claro y un recorrido sencillo. Si ademas integras formularios o automatizaciones basicas, puedes responder mas rapido y trabajar con mas orden.</p>
    `,updatedAt:e},{id:`blog-automatizaciones`,slug:`automatizaciones-simples-para-negocios-pequenos`,title:`Automatizaciones simples para negocios pequenos que quieren ahorrar tiempo`,excerpt:`Pequenas automatizaciones bien pensadas pueden ayudarte a responder mejor, reducir tareas repetitivas y ordenar tu operacion sin sistemas complejos.`,metaDescription:`Ideas de automatizacion para pequenos negocios: formularios, respuestas iniciales, captacion de leads y organizacion comercial.`,coverImage:t(`Automatizaciones`,`#082f49`,`#0f766e`),content:`
      <h2>Automatizar no siempre significa complicar</h2>
      <p>Muchos negocios pequenos pueden mejorar bastante con ajustes sencillos: formularios mejor pensados, respuestas iniciales automáticas y pasos mas claros para dar seguimiento a cada consulta.</p>
      <p>El objetivo no es reemplazar el trato humano, sino liberar tiempo para atender mejor lo importante.</p>
      <h2>Donde se nota primero el cambio</h2>
      <p>Cuando disminuyen los mensajes repetidos, se ordena la informacion y cada nuevo contacto llega con mas contexto, el negocio gana eficiencia y responde con mas seguridad.</p>
    `,updatedAt:e}];function i(e,t=0){let r=typeof e?.title==`string`&&e.title.trim()?e.title.trim():`Articulo ${t+1}`,i=typeof e?.slug==`string`&&e.slug.trim()?e.slug.trim():`articulo-${t+1}`;return{id:typeof e?.id==`string`&&e.id.trim()?e.id.trim():i,slug:i,title:r,excerpt:typeof e?.excerpt==`string`?e.excerpt.trim():``,metaDescription:typeof e?.metaDescription==`string`?e.metaDescription.trim():``,coverImage:typeof e?.coverImage==`string`&&e.coverImage.trim()?e.coverImage.trim():n(r),content:typeof e?.content==`string`?e.content:``,updatedAt:typeof e?.updatedAt==`string`&&e.updatedAt.trim()?e.updatedAt.trim():new Date().toISOString()}}function a(e){return[...e].sort((e,t)=>{let n=Date.parse(e.updatedAt),r=Date.parse(t.updatedAt);return(Number.isNaN(r)?0:r)-(Number.isNaN(n)?0:n)})}async function o(){try{let e=await fetch(`./articles.json`,{cache:`no-store`});if(!e.ok)throw Error(`No se pudo cargar el JSON publicado.`);let t=await e.json();return a(Array.isArray(t)?t.map(i):r.map(i))}catch{return a(r.map(i))}}async function s(e){return(await o()).find(t=>t.slug===e)??null}function c(e){let t=document.createElement(`div`);return t.innerHTML=e,(t.textContent||t.innerText||``).trim()}function l(e,t=160){return e.length<=t?e:`${e.slice(0,t).trimEnd()}...`}function u(e){return new Intl.DateTimeFormat(`es-DO`,{day:`numeric`,month:`long`,year:`numeric`}).format(new Date(e))}function d(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}export{s as a,l as i,u as n,o,c as r,d as t};