import"./src-Bn_bsBbM.js";import{a as e,c as t,d as n,g as r,h as i,i as a,l as o,m as s,n as c,r as l,s as u,t as d}from"./utils-C9ChLSvT.js";var f=document.getElementById(`app`),p=new URLSearchParams(window.location.search),m=null,h=!1,g=``,_=``;function v(t){document.title=`${t.title} | Blog | En Linea Digital`;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t.metaDescription||e(a(t.content),160))}function y(e,t=!1){let n=new URL(window.location.href);n.searchParams.set(`slug`,e),t?n.searchParams.set(`edit`,`1`):n.searchParams.delete(`edit`),window.history.replaceState({},``,n)}function b(e){_=e;let t=document.getElementById(`save-status`);t&&(t.textContent=e)}async function x(e,t,n,i,a=!0){m=await S(e,t,n,i),await r(m),y(m.slug,a),v(m)}async function S(t,n,r,i){let s=n.value.trim()||`Articulo sin titulo`,c=r.value.trim()||e(a(t.innerHTML),160),l=i.value.trim()||e(a(t.innerHTML),160),d=await o(u(s),m.id);return{...m,title:s,slug:d,excerpt:c,metaDescription:l,coverImage:g||m.coverImage,content:t.innerHTML}}function C(e,t){t.focus();let n=window.getSelection();if(!n||n.rangeCount===0){t.insertAdjacentHTML(`beforeend`,e);return}let r=n.getRangeAt(0);r.deleteContents();let i=document.createElement(`div`);i.innerHTML=e;let a=document.createDocumentFragment(),o,s=null;for(;o=i.firstChild;)s=a.appendChild(o);r.insertNode(a),s&&(r.setStartAfter(s),r.collapse(!0),n.removeAllRanges(),n.addRange(r))}function w(){let e=document.getElementById(`editor-content`),n=document.getElementById(`cover-url`),r=document.getElementById(`cover-preview-image`),i=document.getElementById(`cover-upload`),a=document.getElementById(`content-image-upload`),o=document.getElementById(`article-title`),s=document.getElementById(`article-excerpt`),c=document.getElementById(`article-meta-description`);if(!(e instanceof HTMLElement)||!(o instanceof HTMLInputElement)||!(s instanceof HTMLTextAreaElement)||!(c instanceof HTMLTextAreaElement))return;let u=0,d=()=>{window.clearTimeout(u),b(`Guardando borrador...`),u=window.setTimeout(async()=>{try{await x(e,o,s,c,!0),b(`Borrador guardado localmente.`)}catch(e){b(e instanceof Error?e.message:`No se pudo guardar el borrador.`)}},350)};document.querySelectorAll(`[data-editor-command]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.getAttribute(`data-editor-command`);if(e.focus(),n===`bold`){document.execCommand(`bold`);return}if(n===`h2`){document.execCommand(`formatBlock`,!1,`h2`);return}n===`p`&&document.execCommand(`formatBlock`,!1,`p`)})}),document.getElementById(`insert-image-button`)?.addEventListener(`click`,()=>{a?.click()}),a?.addEventListener(`change`,async t=>{let n=t.target.files?.[0];if(n){C(`<figure><img src="${await l(n)}" alt="Imagen dentro del articulo" /></figure>`,e);try{b(`Guardando imagen...`),await x(e,o,s,c,!0),b(`Imagen guardada localmente.`)}catch(e){let t=e instanceof Error?e.message:`No se pudo guardar la imagen.`;b(t),window.alert(t)}t.target.value=``}}),n?.addEventListener(`input`,()=>{g=n.value.trim(),r instanceof HTMLImageElement&&(r.src=g||m?.coverImage||``),d()}),i?.addEventListener(`change`,async t=>{let i=t.target.files?.[0];if(i){g=await l(i),r instanceof HTMLImageElement&&(r.src=g),n instanceof HTMLInputElement&&(n.value=g);try{b(`Guardando portada...`),await x(e,o,s,c,!0),b(`Portada guardada localmente.`)}catch(e){let t=e instanceof Error?e.message:`No se pudo guardar la portada.`;b(t),window.alert(t)}t.target.value=``}}),o.addEventListener(`input`,d),s.addEventListener(`input`,d),c.addEventListener(`input`,d),e.addEventListener(`input`,d),document.getElementById(`cancel-edit`)?.addEventListener(`click`,async()=>{window.clearTimeout(u),h=!1,y(m.slug,!1),await E()}),document.getElementById(`delete-article`)?.addEventListener(`click`,async()=>{if(window.confirm(`¿Quieres eliminar este articulo?`))try{await t(m.id),window.location.href=`./`}catch(e){let t=e instanceof Error?e.message:`No se pudo eliminar el articulo.`;b(t),window.alert(t)}}),document.getElementById(`save-article`)?.addEventListener(`click`,async()=>{window.clearTimeout(u);try{await x(e,o,s,c,!1),b(`Cambios guardados localmente.`),h=!1,await E()}catch(e){let t=e instanceof Error?e.message:`No se pudo guardar el articulo.`;b(t),window.alert(t)}})}function T(){document.title=`Articulo no encontrado | En Linea Digital`,f.innerHTML=`
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
  `}async function E(){if(!m){T();return}v(m);let e=await s();g||=m.coverImage,f.innerHTML=`
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
              <img class="blog-article-cover" src="${m.coverImage}" alt="Portada de ${d(m.title)}" />
              <div class="blog-article-content">
                <p class="blog-eyebrow">Articulo del blog</p>
                <h1 class="blog-article-title">${d(m.title)}</h1>
                <p class="blog-article-meta">Actualizado ${c(m.updatedAt)}</p>
                <p class="blog-article-excerpt">${d(m.excerpt)}</p>
                <div class="blog-rich-text">${m.content}</div>
              </div>
            </article>

            <section class="blog-editor-panel ${h?``:`blog-hidden`}" aria-label="Editor visual del articulo">
              <p class="blog-eyebrow">Editor visual</p>
              <h2 class="blog-section-title">Editar articulo</h2>
              <p class="blog-note">Puedes cambiar portada, titulo, extracto, meta description, formato del texto e insertar imagenes dentro del contenido.</p>

              <div class="blog-editor-grid">
                <input id="article-title" class="blog-input" type="text" value="${d(m.title)}" placeholder="Titulo del articulo" />
                <div class="blog-field-row">
                  <textarea id="article-excerpt" class="blog-textarea" placeholder="Extracto del articulo">${d(m.excerpt)}</textarea>
                  <textarea id="article-meta-description" class="blog-textarea" placeholder="Meta description">${d(m.metaDescription)}</textarea>
                </div>

                <div class="blog-field-row">
                  <div>
                    <input id="cover-url" class="blog-input" type="text" value="${d(m.coverImage)}" placeholder="URL de la portada" />
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
                <p class="blog-note" id="save-status">${_||`Los cambios se guardan localmente en este navegador.`}</p>
              </div>
            </section>
          </div>
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital. Contenido editable en el front-end y guardado en el navegador.</p>
        </div>
      </footer>
    </div>
  `,document.getElementById(`toggle-edit-mode`)?.addEventListener(`click`,async()=>{try{await i(!e),e&&(h=!1,y(m.slug,!1)),await E()}catch(e){let t=e instanceof Error?e.message:`No se pudo cambiar el modo edicion.`;window.alert(t)}}),document.getElementById(`toggle-article-edit`)?.addEventListener(`click`,async()=>{e&&(h=!h,y(m.slug,h),await E())}),h&&w()}Promise.all([n(p.get(`slug`)||``),s()]).then(([e,t])=>{m=e,h=t&&p.get(`edit`)===`1`,g=m?.coverImage??``,E()});