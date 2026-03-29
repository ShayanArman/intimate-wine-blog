import type { BlogArticle, BlogArticleChangefreq, BlogArticleComponent, BlogArticleMetadata, BlogArticlePriority } from "./blog-types";

export type {
  BlogArticle,
  BlogArticleChangefreq,
  BlogArticleComponent,
  BlogArticleMetadata,
  BlogArticlePriority,
} from "./blog-types";

type BlogArticleEntry = {
  slug: string;
  metadata: BlogArticleMetadata;
  Content: BlogArticleComponent;
};

type BlogArticleModule = {
  default: BlogArticleComponent;
  metadata: BlogArticleMetadata;
};

type BlogContext = {
  keys(): string[];
  <T = BlogArticleModule>(key: string): T;
};

const blogContext = (require as NodeRequire & {
  context: (directory: string, useSubdirectories: boolean, regExp: RegExp) => BlogContext;
}).context("../content/blog", false, /\.mdx$/);

const BLOG_ARTICLES_BY_SLUG = new Map<string, BlogArticleEntry>();

blogContext.keys().forEach((key) => {
  const articleModule = blogContext<BlogArticleModule>(key);
  const slugMatch = key.match(/([^/]+)\.mdx$/);

  if (!slugMatch) {
    return;
  }

  BLOG_ARTICLES_BY_SLUG.set(slugMatch[1], {
    slug: slugMatch[1],
    metadata: articleModule.metadata,
    Content: articleModule.default,
  });
});

const BLOG_ARTICLES: BlogArticleEntry[] = Array.from(BLOG_ARTICLES_BY_SLUG.values());

function normalizeText(value: string | null | undefined): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  return trimmedValue;
}

function normalizeThumbnail(thumbnail: string | null | undefined): string | null {
  const normalizedThumbnail = normalizeText(thumbnail);

  if (!normalizedThumbnail) {
    return null;
  }

  return normalizedThumbnail.startsWith("/") ? normalizedThumbnail : `/${normalizedThumbnail}`;
}

function normalizeChangefreq(value: BlogArticleChangefreq): BlogArticleChangefreq {
  return value === "daily" || value === "weekly" || value === "monthly"
    ? value
    : "monthly";
}

function normalizePriority(value: BlogArticlePriority): BlogArticlePriority {
  return value === "0.5" || value === "0.6" || value === "0.7" || value === "0.8" || value === "0.9"
    ? value
    : "0.8";
}

function toBlogArticle({ slug, metadata }: BlogArticleEntry): BlogArticle {
  return {
    slug,
    title: metadata.title,
    subtitle: metadata.subtitle ?? null,
    date: metadata.date,
    category: metadata.category,
    excerpt: metadata.excerpt,
    changefreq: normalizeChangefreq(metadata.changefreq),
    priority: normalizePriority(metadata.priority),
    thumbnail: normalizeThumbnail(metadata.thumbnail),
    thumbnailCaption: normalizeText(metadata.thumbnailCaption),
    imageFallbackText: normalizeText(metadata.imageFallbackText),
    videoEmbedUrl: metadata.videoEmbedUrl ?? null,
    videoSlug: metadata.videoSlug ?? null,
  };
}

function getBlogArticleEntry(slug: string): BlogArticleEntry | null {
  return BLOG_ARTICLES.find((article) => article.slug === slug) ?? null;
}

/** Return every article, newest first. */
export function getAllBlogArticles(): BlogArticle[] {
  return [...BLOG_ARTICLES]
    .map(toBlogArticle)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

/** Return a single article's metadata. */
export function getBlogArticle(slug: string): BlogArticle | null {
  const article = getBlogArticleEntry(slug);

  return article ? toBlogArticle(article) : null;
}

/** Return the MDX component for a single article. */
export function getBlogArticleComponent(slug: string): BlogArticleComponent | null {
  return getBlogArticleEntry(slug)?.Content ?? null;
}
