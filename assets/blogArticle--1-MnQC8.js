import"./src-DgfBaFtG.js";import{a as e,i as t,n,r,t as i}from"./utils-CeKr61LV.js";var a=document.getElementById(`app`),o=new URLSearchParams(window.location.search);function s(e){document.title=`${e.title} | Blog | En Linea Digital`;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,e.metaDescription||t(r(e.content),160))}function c(){document.title=`Articulo no encontrado | En Linea Digital`,a.innerHTML=`
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
  `}function l(e){if(!e){c();return}s(e),a.innerHTML=`
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
              <img class="blog-article-cover" src="${e.coverImage}" alt="Portada de ${i(e.title)}" />
              <div class="blog-article-content">
                <p class="blog-eyebrow">Articulo del blog</p>
                <h1 class="blog-article-title">${i(e.title)}</h1>
                <p class="blog-article-meta">Actualizado ${n(e.updatedAt)}</p>
                <p class="blog-article-excerpt">${i(e.excerpt)}</p>
                <div class="blog-rich-text">${e.content}</div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer class="blog-footer">
        <div class="blog-footer-inner">
          <p>Blog de En Linea Digital. Contenido publicado directamente desde el proyecto.</p>
        </div>
      </footer>
    </div>
  `}e(o.get(`slug`)||``).then(e=>{l(e)});