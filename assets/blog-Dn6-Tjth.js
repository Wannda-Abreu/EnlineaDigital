import"./src-DgfBaFtG.js";import{i as e,n as t,o as n}from"./utils-CeKr61LV.js";var r=document.getElementById(`app`);async function i(){let i=await n();r.innerHTML=`
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

          ${i.length?`<div class="blog-grid">
                  ${i.map(n=>`
                        <article class="blog-card">
                          <img class="blog-card-cover" src="${n.coverImage}" alt="Portada de ${n.title}" />
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
  `,document.title=`Blog | En Linea Digital`;let a=document.querySelector(`meta[name="description"]`);a&&a.setAttribute(`content`,`Blog de En Linea Digital con articulos sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.`)}i();