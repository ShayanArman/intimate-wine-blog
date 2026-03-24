import { BUSINESS_DESCRIPTION, BUSINESS_TITLE, DEFAULT_KEYWORDS, LINKED_SITE_URL, MAIN_PAGE_DESCRIPTION } from "@lib/info";

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
};

const PATH_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-03-03T00:11:55-08:00",
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
  return normalizedPath === "/" ? LINKED_SITE_URL : `${LINKED_SITE_URL}${normalizedPath}`;
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
