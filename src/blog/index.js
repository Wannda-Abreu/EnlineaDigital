import "../index.css";
import "./blog.css";
import { getPublishedArticles } from "./published.js";
import { formatDate, truncateText } from "./utils.js";

const app = document.getElementById("app");
const BLOG_URL = "https://wannda-abreu.github.io/EnlineaDigital/blog/";
const SOCIAL_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1200/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png";

function setMeta(selector, content) {
  const element = document.querySelector(selector);
  if (element && content) {
    element.setAttribute("content", content);
  }
}

async function renderBlogIndex() {
  const articles = await getPublishedArticles();

  app.innerHTML = `
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="../">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>

          <div class="blog-header-actions">
            <a class="blog-button-link" href="../">Volver a la web</a>
          </div>
        </div>
      </header>

      <main class="blog-main">
        <section class="blog-hero"></section>

        <section class="blog-section-card">
          <div class="blog-toolbar">
            <div>
              <p class="blog-eyebrow">Articulos publicados</p>
              <h2 class="blog-section-title">Listado del blog</h2>
              <p class="blog-section-text">
                Temas en tendencias de marketing digital en RD.
              </p>
            </div>
          </div>

          ${
            articles.length
              ? `<div class="blog-grid">
                  ${articles
                    .map(
                      (article) => `
                        <article class="blog-card">
                          <img class="blog-card-cover" src="${article.coverImage}" alt="Portada de ${article.title}" width="1600" height="900" loading="lazy" decoding="async" />
                          <div class="blog-card-body">
                            <p class="blog-card-meta">Actualizado ${formatDate(article.updatedAt)}</p>
                            <h3 class="blog-card-title">${article.title}</h3>
                            <p class="blog-card-excerpt">${truncateText(article.excerpt, 160)}</p>
                            <div class="blog-card-actions">
                              <a class="blog-button-link" href="./article.html?slug=${encodeURIComponent(article.slug)}">Leer mas</a>
                            </div>
                          </div>
                        </article>
                      `,
                    )
                    .join("")}
                </div>`
              : `<div class="blog-empty-state">
                  <p class="blog-eyebrow">Sin articulos</p>
                  <h2 class="blog-section-title">Todavia no hay entradas en el blog</h2>
                  <p class="blog-section-text">
                    Agrega tus articulos en public/blog/articles.json y se publicaran directamente.
                  </p>
                </div>`
          }
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital. Paginas web, marketing digital, SEO y automatizacion para negocios.</p>
        </div>
      </footer>
    </div>
  `;

  document.title = "Blog | En Linea Digital";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      "Blog de En Linea Digital con articulos sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.",
    );
  }
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", BLOG_URL);
  }
  setMeta('meta[property="og:title"]', "Blog | Enlinea Digital");
  setMeta(
    'meta[property="og:description"]',
    "Articulos de Enlinea Digital sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.",
  );
  setMeta('meta[property="og:url"]', BLOG_URL);
  setMeta('meta[property="og:image"]', SOCIAL_IMAGE_URL);
  setMeta('meta[name="twitter:title"]', "Blog | Enlinea Digital");
  setMeta(
    'meta[name="twitter:description"]',
    "Blog de Enlinea Digital con contenido sobre marketing digital, SEO, paginas web y automatizacion.",
  );
  setMeta('meta[name="twitter:image"]', SOCIAL_IMAGE_URL);
}

renderBlogIndex();
