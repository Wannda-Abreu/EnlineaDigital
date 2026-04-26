import"./src-w2TradVe.js";import{a as e,i as t,n,r,t as i}from"./utils-Crb2Zu-7.js";var a=document.getElementById(`app`),o=new URLSearchParams(window.location.search),s=`https://wannda-abreu.github.io/EnlineaDigital/blog/article.html`,c=`https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_1200/v1777196739/ChatGPT_Image_26_abr_2026_11_45_02_rfh81q.png`;function l(e){let n=`${s}?slug=${encodeURIComponent(e.slug)}`,i=e.metaDescription||t(r(e.content),160),a=e.coverImage||c;document.title=`${e.title} | Blog | En Linea Digital`;let o=document.querySelector(`meta[name="description"]`);o&&o.setAttribute(`content`,i);let l=document.querySelector(`link[rel="canonical"]`);l&&l.setAttribute(`href`,n);let u=(e,t)=>{let n=document.querySelector(e);n&&t&&n.setAttribute(`content`,t)};u(`meta[property="og:title"]`,`${e.title} | Blog | Enlinea Digital`),u(`meta[property="og:description"]`,i),u(`meta[property="og:url"]`,n),u(`meta[property="og:image"]`,a),u(`meta[name="twitter:title"]`,`${e.title} | Blog | Enlinea Digital`),u(`meta[name="twitter:description"]`,i),u(`meta[name="twitter:image"]`,a);let d=document.getElementById(`article-schema`);d||(d=document.createElement(`script`),d.type=`application/ld+json`,d.id=`article-schema`,document.head.appendChild(d)),d.textContent=JSON.stringify({"@context":`https://schema.org`,"@type":`Article`,headline:e.title,description:i,image:[a],dateModified:e.updatedAt,mainEntityOfPage:n,author:{"@type":`Organization`,name:`Enlinea Digital`},publisher:{"@type":`Organization`,name:`Enlinea Digital`,logo:{"@type":`ImageObject`,url:`https://res.cloudinary.com/dsyfal3wa/image/upload/f_auto,q_auto,w_512/v1775600013/3b9cd3bf-2bdc-42a1-88b7-0b350d92e2c2_si6nzj.png`}}})}function u(){document.title=`Articulo no encontrado | En Linea Digital`,a.innerHTML=`
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
  `}function d(e){if(!e){u();return}l(e),a.innerHTML=`
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
  `}e(o.get(`slug`)||``).then(e=>{d(e)});