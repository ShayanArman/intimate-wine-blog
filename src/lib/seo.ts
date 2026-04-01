import { DEFAULT_KEYWORDS } from "./keywords";
import {
  BROWSER_MAIN_PAGE_TITLE,
  BUSINESS_DESCRIPTION,
  BUSINESS_TITLE,
  MAIN_PAGE_DESCRIPTION,
  SITE_URL,
} from "@lib/info";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  ogType: "website" | "article";
}

const DEFAULT_META: SeoMeta = {
  title: BUSINESS_TITLE,
  description: BUSINESS_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  ogType: "website",
};

const PATH_META: Record<string, Partial<SeoMeta>> = {
  "/": {
    title: BUSINESS_TITLE,
    description: MAIN_PAGE_DESCRIPTION,
  },
  "/[slug]": {
    title: BROWSER_MAIN_PAGE_TITLE,
    description: MAIN_PAGE_DESCRIPTION,
    ogType: "article",
  },
};

const PATH_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-04-01T13:35:00-07:00",
};

export function normalizePath(inputPath: string): string {
  const [withoutHash] = inputPath.split("#");
  const [withoutQuery] = withoutHash.split("?");

  if (!withoutQuery || withoutQuery === "/") {
    return "/";
  }

  return withoutQuery.replace(/\/+$/, "");
}

export function toCanonicalUrl(path: string): string {
  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export function getPathLastModified(pathname: string): string | null {
  const normalizedPath = normalizePath(pathname);
  return PATH_LAST_MODIFIED[normalizedPath] ?? null;
}

export function getSeoMeta(pathname: string): SeoMeta {
  return {
    ...DEFAULT_META,
    ...(PATH_META[pathname] ?? {}),
  };
}
