import { createFallbackCoverImage, defaultArticles } from "./data.js";

function normalizeArticle(article, index = 0) {
  const title =
    typeof article?.title === "string" && article.title.trim()
      ? article.title.trim()
      : `Articulo ${index + 1}`;
  const slug =
    typeof article?.slug === "string" && article.slug.trim()
      ? article.slug.trim()
      : `articulo-${index + 1}`;

  return {
    id: typeof article?.id === "string" && article.id.trim() ? article.id.trim() : slug,
    slug,
    title,
    excerpt: typeof article?.excerpt === "string" ? article.excerpt.trim() : "",
    metaDescription:
      typeof article?.metaDescription === "string" ? article.metaDescription.trim() : "",
    coverImage:
      typeof article?.coverImage === "string" && article.coverImage.trim()
        ? article.coverImage.trim()
        : createFallbackCoverImage(title),
    content: typeof article?.content === "string" ? article.content : "",
    updatedAt:
      typeof article?.updatedAt === "string" && article.updatedAt.trim()
        ? article.updatedAt.trim()
        : new Date().toISOString(),
  };
}

function sortArticles(articles) {
  return [...articles].sort((left, right) => {
    const leftTime = Date.parse(left.updatedAt);
    const rightTime = Date.parse(right.updatedAt);
    return (Number.isNaN(rightTime) ? 0 : rightTime) - (Number.isNaN(leftTime) ? 0 : leftTime);
  });
}

export async function getPublishedArticles() {
  try {
    const response = await fetch("./articles.json", { cache: "no-store" });
    if (!response.ok) {
      throw new Error("No se pudo cargar el JSON publicado.");
    }

    const payload = await response.json();
    if (!Array.isArray(payload)) {
      return sortArticles(defaultArticles.map(normalizeArticle));
    }

    return sortArticles(payload.map(normalizeArticle));
  } catch {
    return sortArticles(defaultArticles.map(normalizeArticle));
  }
}

export async function getPublishedArticleBySlug(slug) {
  const articles = await getPublishedArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}
