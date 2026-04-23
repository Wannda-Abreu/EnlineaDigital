import"./src-Bn_bsBbM.js";import{a as e,c as t,f as n,h as r,m as i,n as a,o,p as s,u as c}from"./utils-C9ChLSvT.js";var l=document.getElementById(`app`);async function u(){let d=await n(),f=await i();l.innerHTML=`
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="../">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>

          <div class="blog-header-actions">
            <button class="blog-button-ghost" id="toggle-edit-mode">
              ${f?`Salir de edicion`:`Activar modo edicion`}
            </button>
            <button class="blog-button-ghost ${f?``:`blog-hidden`}" id="export-articles">
              Exportar JSON
            </button>
            <button class="blog-button-ghost ${f?``:`blog-hidden`}" id="import-articles">
              Importar JSON
            </button>
            <button class="blog-button ${f?``:`blog-hidden`}" id="create-article">
              Nuevo articulo
            </button>
            <input class="blog-hidden" id="import-articles-file" type="file" accept="application/json" />
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

          ${d.length?`<div class="blog-grid">
                  ${d.map(t=>`
                        <article class="blog-card">
                          <img class="blog-card-cover" src="${t.coverImage}" alt="Portada de ${t.title}" />
                          <div class="blog-card-body">
                            <p class="blog-card-meta">Actualizado ${a(t.updatedAt)}</p>
                            <h3 class="blog-card-title">${t.title}</h3>
                            <p class="blog-card-excerpt">${e(t.excerpt,160)}</p>
                            <div class="blog-card-actions">
                              <a class="blog-button-link" href="./article.html?slug=${encodeURIComponent(t.slug)}">Leer mas</a>
                              <a class="blog-button-ghost ${f?``:`blog-hidden`}" href="./article.html?slug=${encodeURIComponent(t.slug)}&edit=1">Editar</a>
                              <button class="blog-button-ghost ${f?``:`blog-hidden`}" data-delete-id="${t.id}">Eliminar</button>
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
  `,document.title=`Blog | En Linea Digital`;let p=document.querySelector(`meta[name="description"]`);p&&p.setAttribute(`content`,`Blog editable de En Linea Digital con articulos sobre marketing digital, paginas web, SEO y automatizacion para negocios en Republica Dominicana.`),document.getElementById(`toggle-edit-mode`)?.addEventListener(`click`,async()=>{try{await r(!f),await u()}catch(e){let t=e instanceof Error?e.message:`No se pudo cambiar el modo edicion.`;window.alert(t)}}),document.getElementById(`create-article`)?.addEventListener(`click`,async()=>{try{let e=await o();window.location.href=`./article.html?slug=${encodeURIComponent(e.slug)}&edit=1`}catch(e){let t=e instanceof Error?e.message:`No se pudo crear el articulo.`;window.alert(t)}}),document.getElementById(`export-articles`)?.addEventListener(`click`,async()=>{try{let e=await c(),t=new Blob([e],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`enlinea-digital-blog-articulos.json`,r.click(),URL.revokeObjectURL(n)}catch(e){let t=e instanceof Error?e.message:`No se pudo exportar el JSON.`;window.alert(t)}}),document.getElementById(`import-articles`)?.addEventListener(`click`,()=>{document.getElementById(`import-articles-file`)?.click()}),document.getElementById(`import-articles-file`)?.addEventListener(`change`,async e=>{let t=e.target.files?.[0];if(t)try{await s(await t.text()),await u()}catch(e){let t=e instanceof Error?e.message:`No se pudo importar el archivo.`;window.alert(t)}finally{e.target.value=``}}),document.querySelectorAll(`[data-delete-id]`).forEach(e=>{e.addEventListener(`click`,async()=>{let n=e.getAttribute(`data-delete-id`);if(n&&window.confirm(`¿Quieres eliminar este articulo?`))try{await t(n),await u()}catch(e){let t=e instanceof Error?e.message:`No se pudo eliminar el articulo.`;window.alert(t)}})})}u();