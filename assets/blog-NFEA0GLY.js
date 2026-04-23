import"./src-Bn_bsBbM.js";import{a as e,c as t,d as n,f as r,n as i,o as a,p as o}from"./utils-6KIoTFqA.js";var s=document.getElementById(`app`);function c(){let l=n(),u=r();s.innerHTML=`
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="../">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>

          <div class="blog-header-actions">
            <button class="blog-button-ghost" id="toggle-edit-mode">
              ${u?`Salir de edicion`:`Activar modo edicion`}
            </button>
            <button class="blog-button ${u?``:`blog-hidden`}" id="create-article">
              Nuevo articulo
            </button>
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

          ${l.length?`<div class="blog-grid">
                  ${l.map(t=>`
                        <article class="blog-card">
                          <img class="blog-card-cover" src="${t.coverImage}" alt="Portada de ${t.title}" />
                          <div class="blog-card-body">
                            <p class="blog-card-meta">Actualizado ${i(t.updatedAt)}</p>
                            <h3 class="blog-card-title">${t.title}</h3>
                            <p class="blog-card-excerpt">${e(t.excerpt,160)}</p>
                            <div class="blog-card-actions">
                              <a class="blog-button-link" href="./article.html?slug=${encodeURIComponent(t.slug)}">Leer mas</a>
                              <a class="blog-button-ghost ${u?``:`blog-hidden`}" href="./article.html?slug=${encodeURIComponent(t.slug)}&edit=1">Editar</a>
                              <button class="blog-button-ghost ${u?``:`blog-hidden`}" data-delete-id="${t.id}">Eliminar</button>
                            </div>
                          </div>
                        </article>
                      `).join(``)}
                </div>`:`<div class="blog-empty-state">
                  <p class="blog-eyebrow">Sin articulos</p>
                  <h2 class="blog-section-title">Todavia no hay entradas en el blog</h2>
                  <p class="blog-section-text">
                    Activa el modo edicion y crea tu primer articulo para empezar.
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
  `,document.title=`Blog | En Linea Digital`;let d=document.querySelector(`meta[name="description"]`);d&&d.setAttribute(`content`,`Blog editable de En Linea Digital con articulos sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.`),document.getElementById(`toggle-edit-mode`)?.addEventListener(`click`,()=>{o(!u),c()}),document.getElementById(`create-article`)?.addEventListener(`click`,()=>{let e=a();window.location.href=`./article.html?slug=${encodeURIComponent(e.slug)}&edit=1`}),document.querySelectorAll(`[data-delete-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-delete-id`);n&&window.confirm(`¿Quieres eliminar este articulo?`)&&(t(n),c())})})}c();