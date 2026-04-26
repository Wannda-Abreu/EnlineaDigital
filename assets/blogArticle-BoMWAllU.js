import"./src-qc2VdfvU.js";import{a as e,i as t,n,o as r,r as i,t as a}from"./utils-DL5EsKNA.js";var o=document.getElementById(`app`),s=new URLSearchParams(window.location.search),c=`https://wannda-abreu.github.io/EnlineaDigital/blog/article.html`,l=`https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1200/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png`;function u(e){let n=`${c}?slug=${encodeURIComponent(e.slug)}`,r=e.metaDescription||t(i(e.content),160),a=e.coverImage||l;document.title=`${e.title} | Blog | En Linea Digital`;let o=document.querySelector(`meta[name="description"]`);o&&o.setAttribute(`content`,r);let s=document.querySelector(`link[rel="canonical"]`);s&&s.setAttribute(`href`,n);let u=(e,t)=>{let n=document.querySelector(e);n&&t&&n.setAttribute(`content`,t)};u(`meta[property="og:title"]`,`${e.title} | Blog | Enlinea Digital`),u(`meta[property="og:description"]`,r),u(`meta[property="og:url"]`,n),u(`meta[property="og:image"]`,a),u(`meta[name="twitter:title"]`,`${e.title} | Blog | Enlinea Digital`),u(`meta[name="twitter:description"]`,r),u(`meta[name="twitter:image"]`,a);let d=document.getElementById(`article-schema`);d||(d=document.createElement(`script`),d.type=`application/ld+json`,d.id=`article-schema`,document.head.appendChild(d)),d.textContent=JSON.stringify({"@context":`https://schema.org`,"@type":`Article`,headline:e.title,description:r,image:[a],dateModified:e.updatedAt,mainEntityOfPage:n,author:{"@type":`Organization`,name:`Enlinea Digital`},publisher:{"@type":`Organization`,name:`Enlinea Digital`,logo:{"@type":`ImageObject`,url:`https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_512/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png`}}})}function d(){document.title=`Articulo no encontrado | En Linea Digital`,o.innerHTML=`
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
  `}function f(e,t){if(!e){d();return}u(e),o.innerHTML=`
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
              <img class="blog-article-cover" src="${e.coverImage}" alt="Portada de ${a(e.title)}" width="1600" height="900" loading="eager" decoding="async" />
              <div class="blog-article-content">
                <p class="blog-eyebrow">Articulo del blog</p>
                <h1 class="blog-article-title">${a(e.title)}</h1>
                <p class="blog-article-meta">Actualizado ${n(e.updatedAt)}</p>
                <p class="blog-article-excerpt">${a(e.excerpt)}</p>
                <div class="blog-rich-text">${e.content}</div>
                ${t?`
                      <section class="blog-next-article">
                        <p class="blog-eyebrow">Siguiente articulo</p>
                        <a class="blog-next-article-link" href="./article.html?slug=${encodeURIComponent(t.slug)}">
                          <span class="blog-next-article-title">${a(t.title)}</span>
                          <span class="blog-next-article-cta">Leer siguiente</span>
                        </a>
                      </section>
                    `:``}
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
  `}Promise.all([e(s.get(`slug`)||``),r()]).then(([e,t])=>{let n=e?t.findIndex(t=>t.slug===e.slug):-1;f(e,n>=0&&n<t.length-1?t[n+1]:null)});