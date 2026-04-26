import"./src-qc2VdfvU.js";import{i as e,n as t,o as n}from"./utils-DL5EsKNA.js";var r=document.getElementById(`app`),i=`https://wannda-abreu.github.io/EnlineaDigital/blog/`,a=`https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1200/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png`;function o(e,t){let n=document.querySelector(e);n&&t&&n.setAttribute(`content`,t)}async function s(){let s=await n();r.innerHTML=`
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

          ${s.length?`<div class="blog-grid">
                  ${s.map(n=>`
                        <article class="blog-card">
                          <img class="blog-card-cover" src="${n.coverImage}" alt="Portada de ${n.title}" width="1600" height="900" loading="lazy" decoding="async" />
                          <div class="blog-card-body">
                            <p class="blog-card-meta">Actualizado ${t(n.updatedAt)}</p>
                            <h3 class="blog-card-title">${n.title}</h3>
                            <p class="blog-card-excerpt">${e(n.excerpt,160)}</p>
                            <div class="blog-card-actions">
                              <a class="blog-button-link" href="./article.html?slug=${encodeURIComponent(n.slug)}">Leer mas</a>
                            </div>
                          </div>
                        </article>
                      `).join(``)}
                </div>`:`<div class="blog-empty-state">
                  <p class="blog-eyebrow">Sin articulos</p>
                  <h2 class="blog-section-title">Todavia no hay entradas en el blog</h2>
                  <p class="blog-section-text">
                    Agrega tus articulos en public/blog/articles.json y se publicaran directamente.
                  </p>
                </div>`}
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital. Paginas web, marketing digital, SEO y automatizacion para negocios.</p>
        </div>
      </footer>
    </div>
  `,document.title=`Blog | En Linea Digital`;let c=document.querySelector(`meta[name="description"]`);c&&c.setAttribute(`content`,`Blog de En Linea Digital con articulos sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.`);let l=document.querySelector(`link[rel="canonical"]`);l&&l.setAttribute(`href`,i),o(`meta[property="og:title"]`,`Blog | Enlinea Digital`),o(`meta[property="og:description"]`,`Articulos de Enlinea Digital sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.`),o(`meta[property="og:url"]`,i),o(`meta[property="og:image"]`,a),o(`meta[name="twitter:title"]`,`Blog | Enlinea Digital`),o(`meta[name="twitter:description"]`,`Blog de Enlinea Digital con contenido sobre marketing digital, SEO, paginas web y automatizacion.`),o(`meta[name="twitter:image"]`,a)}s();