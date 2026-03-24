export const SITE_NAME = "Intimate.Wine";
export const SITE_URL = "https://www.blog.intimate.wine";
export const LINKED_SITE_URL = "https://intimate.wine";
export const BUSINESS_TITLE = "Intimate Wine - Intimate settings, incredible wine, stories you will remember.";
export const BUSINESS_DESCRIPTION =
  "Intimate Wine offers private wine tastings and wine classes in intimate settings with incredible wine and stories you will remember.";
export const socials_links_map = {
  instagram: "https://www.instagram.com/intimate.wine/",
  founderLinkedIn: "https://www.linkedin.com/in/emilyspadafora",
} as const;
export const SITE_FOUNDER = {
  "@type": "Person",
  name: "Emily Spadafora",
  sameAs: [socials_links_map.founderLinkedIn],
} as const;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/features-1200px.png`;
export const DEFAULT_OG_IMAGE_ALT = "Intimate Wine preview";
export const DEFAULT_KEYWORDS =
  "intimate wine, private wine tastings, wine classes, wine experiences, sommelier-led tastings, wine storytelling";
export const BROWSER_MAIN_PAGE_TITLE = `${SITE_NAME} Blog`