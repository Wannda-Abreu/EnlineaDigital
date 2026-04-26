import "../index.css";
import "./blog.css";
import { getPublishedArticleBySlug, getPublishedArticles } from "./published.js";
import { escapeHtml, formatDate, stripHtml, truncateText } from "./utils.js";

const app = document.getElementById("app");
const params = new URLSearchParams(window.location.search);
const BLOG_ARTICLE_BASE_URL =
  "https://wannda-abreu.github.io/EnlineaDigital/blog/article.html";
const DEFAULT_SOCIAL_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1200/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png";

function setArticleSeo(article) {
  const articleUrl = `${BLOG_ARTICLE_BASE_URL}?slug=${encodeURIComponent(article.slug)}`;
  const articleDescription =
    article.metaDescription || truncateText(stripHtml(article.content), 160);
  const articleImage = article.coverImage || DEFAULT_SOCIAL_IMAGE_URL;

  document.title = `${article.title} | Blog | En Linea Digital`;
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", articleDescription);
  }

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute("href", articleUrl);
  }

  const setMeta = (selector, content) => {
    const element = document.querySelector(selector);
    if (element && content) {
      element.setAttribute("content", content);
    }
  };

  setMeta('meta[property="og:title"]', `${article.title} | Blog | Enlinea Digital`);
  setMeta('meta[property="og:description"]', articleDescription);
  setMeta('meta[property="og:url"]', articleUrl);
  setMeta('meta[property="og:image"]', articleImage);
  setMeta('meta[name="twitter:title"]', `${article.title} | Blog | Enlinea Digital`);
  setMeta('meta[name="twitter:description"]', articleDescription);
  setMeta('meta[name="twitter:image"]', articleImage);

  let schema = document.getElementById("article-schema");
  if (!schema) {
    schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "article-schema";
    document.head.appendChild(schema);
  }

  schema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: articleDescription,
    image: [articleImage],
    dateModified: article.updatedAt,
    mainEntityOfPage: articleUrl,
    author: {
      "@type": "Organization",
      name: "Enlinea Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Enlinea Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_512/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png",
      },
    },
  });
}

function renderNotFound() {
  document.title = "Articulo no encontrado | En Linea Digital";
  app.innerHTML = `
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="./">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>
        </div>
      </header>
      <main class="blog-main">
        <section class="blog-hero">
          <div class="blog-empty-state">
            <p class="blog-eyebrow">Articulo no encontrado</p>
            <h1 class="blog-hero-title">No encontramos este contenido.</h1>
            <p class="blog-hero-subtitle">Vuelve al blog y selecciona otro articulo disponible.</p>
            <div class="blog-card-actions" style="justify-content:center; margin-top:1.5rem;">
              <a class="blog-button-link" href="./">Volver al blog</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderArticlePage(article, nextArticle) {
  if (!article) {
    renderNotFound();
    return;
  }

  setArticleSeo(article);

  app.innerHTML = `
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="./">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>

          <div class="blog-header-actions">
            <a class="blog-button-link" href="./">Volver al blog</a>
            <a class="blog-button-ghost" href="../#contacto">Solicitar una web</a>
          </div>
        </div>
      </header>

      <main class="blog-main">
        <section class="blog-hero">
          <div class="blog-article-layout">
            <article class="blog-article-card">
              <img class="blog-article-cover" src="${article.coverImage}" alt="Portada de ${escapeHtml(article.title)}" width="1600" height="900" loading="eager" decoding="async" />
              <div class="blog-article-content">
                <p class="blog-eyebrow">Articulo del blog</p>
                <h1 class="blog-article-title">${escapeHtml(article.title)}</h1>
                <p class="blog-article-meta">Actualizado ${formatDate(article.updatedAt)}</p>
                <p class="blog-article-excerpt">${escapeHtml(article.excerpt)}</p>
                <div class="blog-rich-text">${article.content}</div>
                ${
                  nextArticle
                    ? `
                      <section class="blog-next-article">
                        <p class="blog-eyebrow">Siguiente articulo</p>
                        <a class="blog-next-article-link" href="./article.html?slug=${encodeURIComponent(nextArticle.slug)}">
                          <span class="blog-next-article-title">${escapeHtml(nextArticle.title)}</span>
                          <span class="blog-next-article-cta">Leer siguiente</span>
                        </a>
                      </section>
                    `
                    : ""
                }
                <div class="blog-post-actions">
                  <a class="blog-button-link" href="./">Ver mas articulos</a>
                  <a class="blog-button-ghost" href="../#contacto">Solicitar una web</a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital.</p>
        </div>
      </footer>
    </div>
  `;
}

Promise.all([
  getPublishedArticleBySlug(params.get("slug") || ""),
  getPublishedArticles(),
]).then(([article, articles]) => {
  const currentIndex = article ? articles.findIndex((entry) => entry.slug === article.slug) : -1;
  const nextArticle =
    currentIndex >= 0 && currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  renderArticlePage(article, nextArticle);
});
