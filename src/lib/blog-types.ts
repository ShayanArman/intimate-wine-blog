import type { ComponentType } from "react";
import type { MDXProps } from "mdx/types";

export type BlogArticleChangefreq = "daily" | "weekly" | "monthly";
export type BlogArticlePriority = "0.5" | "0.6" | "0.7" | "0.8" | "0.9";

export interface BlogArticleMetadata {
  title: string;
  subtitle: string | null;
  date: string;
  category: string;
  excerpt: string;
  changefreq: BlogArticleChangefreq;
  priority: BlogArticlePriority;
  thumbnail: string | null;
  thumbnailCaption?: string | null;
  imageFallbackText: string | null;
  videoEmbedUrl: string | null;
  videoSlug: string | null;
}

export interface BlogArticle extends BlogArticleMetadata {
  slug: string;
}

export type BlogArticleComponent = ComponentType<MDXProps>;
