import { createFallbackCoverImage, defaultArticles } from "./data.js";

const DB_NAME = "enlinea-digital-blog-db";
const DB_VERSION = 1;
const ARTICLES_STORE = "articles";
const SETTINGS_STORE = "settings";
const EDIT_MODE_KEY = "edit-mode";
const LEGACY_ARTICLES_KEY = "enlinea-digital-blog-articles";
const LEGACY_EDIT_MODE_KEY = "enlinea-digital-blog-edit-mode";

function getStorageErrorMessage(error) {
  if (
    error instanceof DOMException &&
    (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED")
  ) {
    return "No se pudo guardar porque el almacenamiento del navegador se lleno. Reduce el tamano o cantidad de imagenes del articulo.";
  }

  return "No se pudo guardar el contenido del blog en este navegador.";
}

function normalizeArticle(article) {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    metaDescription: article.metaDescription,
    coverImage: article.coverImage || createFallbackCoverImage(article.title || "Blog"),
    content: article.content,
    updatedAt: article.updatedAt ?? new Date().toISOString(),
  };
}

function safeReadLegacyJson(key) {
  try {
    const raw = globalThis.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function isDefaultSeed(articles) {
  if (articles.length !== defaultArticles.length) {
    return false;
  }

  const defaultIds = new Set(defaultArticles.map((article) => article.id));
  return articles.every((article) => defaultIds.has(article.id));
}

function getLegacyArticles() {
  const parsed = safeReadLegacyJson(LEGACY_ARTICLES_KEY);
  if (!Array.isArray(parsed)) {
    return null;
  }

  return parsed.map(normalizeArticle);
}

async function getPublishedArticles() {
  try {
    const response = await fetch(new URL("./articles.json", window.location.href));
    if (!response.ok) {
      return null;
    }

    const parsed = await response.json();
    if (!Array.isArray(parsed)) {
      return null;
    }

    return parsed.map(normalizeArticle);
  } catch {
    return null;
  }
}

function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("IndexedDB request failed."));
  });
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(ARTICLES_STORE)) {
        db.createObjectStore(ARTICLES_STORE, { keyPath: "id" });
      }

      if (!db.objectStoreNames.contains(SETTINGS_STORE)) {
        db.createObjectStore(SETTINGS_STORE, { keyPath: "key" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error ?? new Error("No se pudo abrir IndexedDB."));
  });
}

async function withStore(storeName, mode, callback) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(storeName, mode);
    const store = transaction.objectStore(storeName);

    Promise.resolve(callback(store))
      .then((result) => {
        transaction.oncomplete = () => {
          db.close();
          resolve(result);
        };
      })
      .catch((error) => {
        transaction.abort();
        db.close();
        reject(error);
      });

    transaction.onerror = () => {
      db.close();
      reject(transaction.error ?? new Error("Fallo una transaccion de IndexedDB."));
    };

    transaction.onabort = () => {
      db.close();
      reject(transaction.error ?? new Error("La transaccion fue cancelada."));
    };
  });
}

async function ensureDefaultArticles() {
  const existingArticles = await withStore(ARTICLES_STORE, "readonly", async (store) => {
    return promisifyRequest(store.getAll());
  });

  const normalizedExisting = existingArticles.map(normalizeArticle);
  const legacyArticles = getLegacyArticles();
  const publishedArticles = await getPublishedArticles();

  if (legacyArticles?.length) {
    const shouldMigrateLegacy =
      !normalizedExisting.length ||
      (isDefaultSeed(normalizedExisting) &&
        JSON.stringify(normalizedExisting) !== JSON.stringify(legacyArticles));

    if (shouldMigrateLegacy) {
      await saveArticles(legacyArticles);
      return legacyArticles;
    }
  }

  if (publishedArticles?.length) {
    const shouldUsePublished =
      !normalizedExisting.length ||
      (isDefaultSeed(normalizedExisting) &&
        JSON.stringify(normalizedExisting) !== JSON.stringify(publishedArticles));

    if (shouldUsePublished) {
      await saveArticles(publishedArticles);
      return publishedArticles;
    }
  }

  if (normalizedExisting.length) {
    return normalizedExisting;
  }

  await saveArticles(defaultArticles);
  return [...defaultArticles];
}

export async function getArticles() {
  const articles = await ensureDefaultArticles();
  return articles
    .map(normalizeArticle)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
}

export async function saveArticles(articles) {
  const normalized = articles.map(normalizeArticle);

  try {
    await withStore(ARTICLES_STORE, "readwrite", async (store) => {
      const existingArticles = await promisifyRequest(store.getAll());
      for (const article of existingArticles) {
        if (!normalized.some((item) => item.id === article.id)) {
          store.delete(article.id);
        }
      }

      for (const article of normalized) {
        store.put(article);
      }
    });
  } catch (error) {
    throw new Error(getStorageErrorMessage(error));
  }
}

export async function exportArticlesJson() {
  return JSON.stringify(await getArticles(), null, 2);
}

export async function importArticlesFromJson(jsonText) {
  const parsed = JSON.parse(jsonText);
  if (!Array.isArray(parsed)) {
    throw new Error("El archivo no contiene una lista valida de articulos.");
  }

  const normalized = parsed.map(normalizeArticle);
  await saveArticles(normalized);
  return normalized;
}

export async function getArticleBySlug(slug) {
  const articles = await getArticles();
  return articles.find((article) => article.slug === slug) ?? null;
}

export function createSlug(title) {
  const base = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);

  return base || `articulo-${Date.now()}`;
}

export async function ensureUniqueSlug(slug, currentId = null) {
  const articles = await getArticles();
  let uniqueSlug = slug;
  let counter = 2;

  while (articles.some((article) => article.slug === uniqueSlug && article.id !== currentId)) {
    uniqueSlug = `${slug}-${counter}`;
    counter += 1;
  }

  return uniqueSlug;
}

export async function createArticle() {
  const articles = await getArticles();
  const title = "Nuevo articulo";
  const baseSlug = createSlug(title);
  const slug = await ensureUniqueSlug(baseSlug);
  const article = {
    id: `article-${Date.now()}`,
    slug,
    title,
    excerpt: "Escribe un extracto breve para mostrarlo en el listado del blog.",
    metaDescription: "Meta description inicial para este articulo del blog.",
    coverImage: defaultArticles[0].coverImage,
    content:
      "<h2>Subtitulo del articulo</h2><p>Empieza a escribir aqui. Puedes usar negrita, subtitulos e insertar imagenes dentro del contenido.</p>",
    updatedAt: new Date().toISOString(),
  };

  await saveArticles([article, ...articles]);
  return article;
}

export async function updateArticle(updatedArticle) {
  const articles = await getArticles();
  const nextArticles = articles.map((article) =>
    article.id === updatedArticle.id
      ? {
          ...updatedArticle,
          updatedAt: new Date().toISOString(),
        }
      : article,
  );

  await saveArticles(nextArticles);
}

export async function deleteArticle(id) {
  const articles = await getArticles();
  const nextArticles = articles.filter((article) => article.id !== id);
  await saveArticles(nextArticles);
}

export async function isEditModeEnabled() {
  const legacyEditMode = safeReadLegacyJson(LEGACY_EDIT_MODE_KEY);
  const dbValue = await withStore(SETTINGS_STORE, "readonly", async (store) => {
    return promisifyRequest(store.get(EDIT_MODE_KEY));
  });

  if (typeof legacyEditMode === "boolean" && !dbValue) {
    await setEditMode(legacyEditMode);
    return legacyEditMode;
  }

  return dbValue?.value === true;
}

export async function setEditMode(enabled) {
  try {
    await withStore(SETTINGS_STORE, "readwrite", async (store) => {
      store.put({ key: EDIT_MODE_KEY, value: enabled });
    });
  } catch (error) {
    throw new Error(getStorageErrorMessage(error));
  }
}
