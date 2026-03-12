import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  thumbnail: string | null;
  imageFallbackText: string | null;
  videoEmbedUrl: string | null;
  content?: string; // rendered HTML (only for single-article views)
}

const newsDirectory = path.join(process.cwd(), "src/content/news");

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

/** Return every article, newest first. */
export function getAllNews(): NewsArticle[] {
  const filenames = fs.readdirSync(newsDirectory).filter((f) => f.endsWith(".md"));

  const articles = filenames.map((filename) => {
    const filePath = path.join(newsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      thumbnail: normalizeThumbnail(data.thumbnail),
      imageFallbackText: data.imageFallbackText ?? null,
      videoEmbedUrl: data.videoEmbedUrl ?? null,
    } as NewsArticle;
  });

  return articles.sort((a, b) => (a.date > b.date ? -1 : 1));
}

/** Return a single article with its rendered HTML body. */
export async function getNewsArticle(slug: string): Promise<NewsArticle | null> {
  const filenames = fs.readdirSync(newsDirectory).filter((f) => f.endsWith(".md"));
  const match = filenames.find((f) => {
    const { data } = matter(fs.readFileSync(path.join(newsDirectory, f), "utf8"));
    return (data.slug ?? f.replace(/\.md$/, "")) === slug;
  });

  if (!match) return null;

  const fileContents = fs.readFileSync(path.join(newsDirectory, match), "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    slug: data.slug ?? match.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    thumbnail: normalizeThumbnail(data.thumbnail),
    imageFallbackText: data.imageFallbackText ?? null,
    videoEmbedUrl: data.videoEmbedUrl ?? null,
    content: processed.toString(),
  };
}
