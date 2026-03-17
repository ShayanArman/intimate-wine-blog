import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export interface VideoEntry {
  slug: string;
  title: string;
  subtitle: string | null;
  date: string;
  category: string;
  excerpt: string;
  posterImage: string | null;
  youtubeUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
  videoId: string;
  relatedUrl: string | null;
  relatedLabel: string | null;
  content?: string;
}

const videosDirectory = path.join(process.cwd(), "src/content/videos");

function normalizeAssetPath(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  return trimmedValue.startsWith("/") ? trimmedValue : `/${trimmedValue}`;
}

function getYouTubeMetadata(rawUrl: unknown) {
  if (typeof rawUrl !== "string") {
    return null;
  }

  const trimmedUrl = rawUrl.trim();

  if (!trimmedUrl) {
    return null;
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(trimmedUrl);
  } catch {
    return null;
  }

  const hostname = parsedUrl.hostname.replace(/^www\./, "");
  let videoId: string | null = null;

  if (hostname === "youtu.be") {
    videoId = parsedUrl.pathname.split("/").filter(Boolean)[0] ?? null;
  } else if (hostname === "youtube.com" || hostname === "m.youtube.com") {
    if (parsedUrl.pathname === "/watch") {
      videoId = parsedUrl.searchParams.get("v");
    } else if (parsedUrl.pathname.startsWith("/embed/") || parsedUrl.pathname.startsWith("/shorts/")) {
      videoId = parsedUrl.pathname.split("/").filter(Boolean)[1] ?? null;
    }
  }

  if (!videoId) {
    return null;
  }

  return {
    videoId,
    youtubeUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  };
}

function parseVideoFile(filename: string, fileContents: string): VideoEntry {
  const { data } = matter(fileContents);
  const youtubeMetadata = getYouTubeMetadata(data.youtubeUrl);

  if (!youtubeMetadata) {
    throw new Error(`Missing or invalid youtubeUrl in video file: ${filename}`);
  }

  return {
    slug: data.slug ?? filename.replace(/\.md$/, ""),
    title: data.title,
    subtitle: data.subtitle ?? null,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    posterImage: normalizeAssetPath(data.posterImage),
    youtubeUrl: youtubeMetadata.youtubeUrl,
    embedUrl: youtubeMetadata.embedUrl,
    thumbnailUrl: youtubeMetadata.thumbnailUrl,
    videoId: youtubeMetadata.videoId,
    relatedUrl: typeof data.relatedUrl === "string" ? data.relatedUrl : null,
    relatedLabel: typeof data.relatedLabel === "string" ? data.relatedLabel : null,
  };
}

export function getAllVideos(): VideoEntry[] {
  const filenames = fs.readdirSync(videosDirectory).filter((filename) => filename.endsWith(".md"));

  const videos = filenames.map((filename) => {
    const filePath = path.join(videosDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return parseVideoFile(filename, fileContents);
  });

  return videos.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getVideoBySlug(slug: string): Promise<VideoEntry | null> {
  const filenames = fs.readdirSync(videosDirectory).filter((filename) => filename.endsWith(".md"));
  const match = filenames.find((filename) => {
    const fileContents = fs.readFileSync(path.join(videosDirectory, filename), "utf8");
    const video = parseVideoFile(filename, fileContents);
    return video.slug === slug;
  });

  if (!match) {
    return null;
  }

  const fileContents = fs.readFileSync(path.join(videosDirectory, match), "utf8");
  const video = parseVideoFile(match, fileContents);
  const { content } = matter(fileContents);
  const processed = await remark().use(remarkGfm).use(html).process(content);

  return {
    ...video,
    content: processed.toString(),
  };
}
