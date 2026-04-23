import"./src-Bn_bsBbM.js";import{a as e,c as t,f as n,i as r,l as i,m as a,n as o,p as s,r as c,s as l,t as u,u as d}from"./utils-6KIoTFqA.js";var f=document.getElementById(`app`),p=new URLSearchParams(window.location.search),m=d(p.get(`slug`)||``),h=n()&&p.get(`edit`)===`1`,g=m?.coverImage??``;function _(t){document.title=`${t.title} | Blog | En Linea Digital`;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t.metaDescription||e(r(t.content),160))}function v(e,t=!1){let n=new URL(window.location.href);n.searchParams.set(`slug`,e),t?n.searchParams.set(`edit`,`1`):n.searchParams.delete(`edit`),window.history.replaceState({},``,n)}function y(e,t){t.focus();let n=window.getSelection();if(!n||n.rangeCount===0){t.insertAdjacentHTML(`beforeend`,e);return}let r=n.getRangeAt(0);r.deleteContents();let i=document.createElement(`div`);i.innerHTML=e;let a=document.createDocumentFragment(),o,s=null;for(;o=i.firstChild;)s=a.appendChild(o);r.insertNode(a),s&&(r.setStartAfter(s),r.collapse(!0),n.removeAllRanges(),n.addRange(r))}function b(){let n=document.getElementById(`editor-content`),o=document.getElementById(`cover-url`),s=document.getElementById(`cover-preview-image`),u=document.getElementById(`cover-upload`),d=document.getElementById(`content-image-upload`);document.querySelectorAll(`[data-editor-command]`).forEach(e=>{e.addEventListener(`click`,()=>{if(!(n instanceof HTMLElement))return;let t=e.getAttribute(`data-editor-command`);if(n.focus(),t===`bold`){document.execCommand(`bold`);return}if(t===`h2`){document.execCommand(`formatBlock`,!1,`h2`);return}t===`p`&&document.execCommand(`formatBlock`,!1,`p`)})}),document.getElementById(`insert-image-button`)?.addEventListener(`click`,()=>{d?.click()}),d?.addEventListener(`change`,async e=>{let t=e.target.files?.[0];!t||!(n instanceof HTMLElement)||(y(`<figure><img src="${await c(t)}" alt="Imagen dentro del articulo" /></figure>`,n),e.target.value=``)}),o?.addEventListener(`input`,()=>{g=o.value.trim(),s instanceof HTMLImageElement&&(s.src=g||m?.coverImage||``)}),u?.addEventListener(`change`,async e=>{let t=e.target.files?.[0];t&&(g=await c(t),s instanceof HTMLImageElement&&(s.src=g),o instanceof HTMLInputElement&&(o.value=g),e.target.value=``)}),document.getElementById(`cancel-edit`)?.addEventListener(`click`,()=>{h=!1,v(m.slug,!1),S()}),document.getElementById(`delete-article`)?.addEventListener(`click`,()=>{window.confirm(`¿Quieres eliminar este articulo?`)&&(t(m.id),window.location.href=`./`)}),document.getElementById(`save-article`)?.addEventListener(`click`,()=>{let t=document.getElementById(`article-title`),o=document.getElementById(`article-excerpt`),s=document.getElementById(`article-meta-description`);if(!(t instanceof HTMLInputElement)||!(o instanceof HTMLTextAreaElement)||!(s instanceof HTMLTextAreaElement)||!(n instanceof HTMLElement))return;let c=t.value.trim()||`Articulo sin titulo`,u=o.value.trim()||e(r(n.innerHTML),160),d=s.value.trim()||e(r(n.innerHTML),160),f=i(l(c),m.id);m={...m,title:c,slug:f,excerpt:u,metaDescription:d,coverImage:g||m.coverImage,content:n.innerHTML},a(m),h=!1,v(m.slug,!1),_(m),S()})}function x(){document.title=`Articulo no encontrado | En Linea Digital`,f.innerHTML=`
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
            <p class="blog-hero-subtitle">Vuelve al blog y selecciona otro articulo o crea uno nuevo en modo edicion.</p>
            <div class="blog-card-actions" style="justify-content:center; margin-top:1.5rem;">
              <a class="blog-button-link" href="./">Volver al blog</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  `}function S(){if(!m){x();return}_(m);let e=n();g||=m.coverImage,f.innerHTML=`
    <div class="blog-shell">
      <header class="blog-header">
        <div class="blog-header-inner">
          <a class="blog-brand" href="./">
            <span class="blog-brand-mark">EL</span>
            <span class="blog-brand-text">EN LINEA DIGITAL</span>
          </a>

          <div class="blog-header-actions">
            <a class="blog-button-link" href="./">Volver al blog</a>
            <button class="blog-button-ghost" id="toggle-edit-mode">
              ${e?`Salir de edicion`:`Activar modo edicion`}
            </button>
            <button class="blog-button ${e?``:`blog-hidden`}" id="toggle-article-edit">
              ${h?`Cerrar editor`:`Editar`}
            </button>
          </div>
        </div>
      </header>

      <main class="blog-main">
        <section class="blog-hero">
          <div class="blog-article-layout">
            <article class="blog-article-card">
              <img class="blog-article-cover" src="${m.coverImage}" alt="Portada de ${u(m.title)}" />
              <div class="blog-article-content">
                <p class="blog-eyebrow">Articulo del blog</p>
                <h1 class="blog-article-title">${u(m.title)}</h1>
                <p class="blog-article-meta">Actualizado ${o(m.updatedAt)}</p>
                <p class="blog-article-excerpt">${u(m.excerpt)}</p>
                <div class="blog-rich-text">${m.content}</div>
              </div>
            </article>

            <section class="blog-editor-panel ${h?``:`blog-hidden`}" aria-label="Editor visual del articulo">
              <p class="blog-eyebrow">Editor visual</p>
              <h2 class="blog-section-title">Editar articulo</h2>
              <p class="blog-note">Puedes cambiar portada, titulo, extracto, meta description, formato del texto e insertar imagenes dentro del contenido.</p>

              <div class="blog-editor-grid">
                <input id="article-title" class="blog-input" type="text" value="${u(m.title)}" placeholder="Titulo del articulo" />
                <div class="blog-field-row">
                  <textarea id="article-excerpt" class="blog-textarea" placeholder="Extracto del articulo">${u(m.excerpt)}</textarea>
                  <textarea id="article-meta-description" class="blog-textarea" placeholder="Meta description">${u(m.metaDescription)}</textarea>
                </div>

                <div class="blog-field-row">
                  <div>
                    <input id="cover-url" class="blog-input" type="text" value="${u(m.coverImage)}" placeholder="URL de la portada" />
                    <p class="blog-note">Puedes pegar una URL o subir un archivo local.</p>
                    <input id="cover-upload" class="blog-input" type="file" accept="image/*" />
                  </div>
                  <div class="blog-cover-preview">
                    <img id="cover-preview-image" src="${m.coverImage}" alt="Vista previa de portada" />
                  </div>
                </div>

                <div>
                  <div class="blog-editor-toolbar">
                    <button type="button" data-editor-command="bold"><strong>Negrita</strong></button>
                    <button type="button" data-editor-command="h2">H2</button>
                    <button type="button" data-editor-command="p">Parrafo</button>
                    <button type="button" id="insert-image-button">Insertar imagen</button>
                  </div>
                  <div id="editor-content" class="blog-editor-surface" contenteditable="true">${m.content}</div>
                  <input id="content-image-upload" class="blog-hidden" type="file" accept="image/*" />
                </div>

                <div class="blog-card-actions">
                  <button class="blog-button" id="save-article">Guardar cambios</button>
                  <button class="blog-button-ghost" id="cancel-edit">Cancelar</button>
                  <button class="blog-button-ghost" id="delete-article">Eliminar articulo</button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital. Contenido editable en el front-end y guardado en localStorage.</p>
        </div>
      </footer>
    </div>
  `,document.getElementById(`toggle-edit-mode`)?.addEventListener(`click`,()=>{s(!e),e&&(h=!1,v(m.slug,!1)),S()}),document.getElementById(`toggle-article-edit`)?.addEventListener(`click`,()=>{e&&(h=!h,v(m.slug,h),S())}),h&&b()}S();