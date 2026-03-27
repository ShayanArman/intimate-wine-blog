import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

type BlogArticleChangefreq = "daily" | "weekly" | "monthly";
type BlogArticlePriority = "0.5" | "0.6" | "0.7" | "0.8" | "0.9";

export interface BlogArticle {
  slug: string;
  title: string;
  subtitle: string | null;
  date: string;
  category: string;
  excerpt: string;
  changefreq: BlogArticleChangefreq;
  priority: BlogArticlePriority;
  thumbnail: string | null;
  imageFallbackText: string | null;
  videoEmbedUrl: string | null;
  videoSlug: string | null;
  content?: string; // rendered HTML (only for single-article views)
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

function normalizeThumbnail(thumbnail: unknown): string | null {
  if (typeof thumbnail !== "string") {
    return null;
  }

  const trimmedThumbnail = thumbnail.trim();

  if (!trimmedThumbnail) {
    return null;
  }

  return trimmedThumbnail.startsWith("/") ? trimmedThumbnail : `/${trimmedThumbnail}`;
}

function normalizeChangefreq(value: unknown): BlogArticleChangefreq {
  return value === "daily" || value === "weekly" || value === "monthly"
    ? value
    : "monthly";
}

function normalizePriority(value: unknown): BlogArticlePriority {
  return value === "0.5" || value === "0.6" || value === "0.7" || value === "0.8" || value === "0.9"
    ? value
    : "0.8";
}

/** Return every article, newest first. */
export function getAllBlogArticles(): BlogArticle[] {
  const filenames = fs.readdirSync(blogDirectory).filter((f) => f.endsWith(".md"));

  const articles = filenames.map((filename) => {
    const filePath = path.join(blogDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      title: data.title,
      subtitle: data.subtitle ?? null,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      changefreq: normalizeChangefreq(data.changefreq),
      priority: normalizePriority(data.priority),
      thumbnail: normalizeThumbnail(data.thumbnail),
      imageFallbackText: data.imageFallbackText ?? null,
      videoEmbedUrl: data.videoEmbedUrl ?? null,
      videoSlug: data.videoSlug ?? null,
    } as BlogArticle;
  });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/** Return a single article with its rendered HTML body. */
export async function getBlogArticle(slug: string): Promise<BlogArticle | null> {
  const filenames = fs.readdirSync(blogDirectory).filter((f) => f.endsWith(".md"));
  const match = filenames.find((f) => {
    const { data } = matter(fs.readFileSync(path.join(blogDirectory, f), "utf8"));
    return (data.slug ?? f.replace(/\.md$/, "")) === slug;
  });

  if (!match) return null;

  const fileContents = fs.readFileSync(path.join(blogDirectory, match), "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug: data.slug ?? match.replace(/\.md$/, ""),
    title: data.title,
    subtitle: data.subtitle ?? null,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    changefreq: normalizeChangefreq(data.changefreq),
    priority: normalizePriority(data.priority),
    thumbnail: normalizeThumbnail(data.thumbnail),
    imageFallbackText: data.imageFallbackText ?? null,
    videoEmbedUrl: data.videoEmbedUrl ?? null,
    videoSlug: data.videoSlug ?? null,
    content: processed.toString(),
  };
}
