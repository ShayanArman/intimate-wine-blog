export * from "@lib/info";

import { BUSINESS_DESCRIPTION, BUSINESS_TITLE, DEFAULT_KEYWORDS, LINKED_SITE_URL } from "@lib/info";

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
    description: BUSINESS_DESCRIPTION,
  },
  // {/* TODO_PostLaunch: Add Chefs section later on as we expand the site */}
  // These are all important for Keyword matching.
  // "/best-ai-email-organizer": {
  //   title: "Best AI Email Organizer - Official AI Email Organizer | Zero Inbox",
  //   description:
  //     "Best AI Email Organizer: Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner for people who need inbox zero.",
  // },
  // "/clean-and-organize-emails": {
  //   title: "How to Clean and Organize Emails Fast - Zero Inbox",
  //   description:
  //     "Learn how to clean and organize email quickly with Zero Inbox, an ai email organizer built for bulk actions.",
  // },
  // "/what-website-should-i-use-to-clean-or-organize-my-emails": {
  //   title: "What Website Should I Use to Clean or Organize My Emails? - Zero Inbox",
  //   description:
  //     "What website should I use to clean or organize my emails? Use Zero Inbox, the Official AI Email Organizer and the Safest AI Email Cleaner.",
  // },
  // "/mark-zuckerberg-loves-inbox-zero-ai": {
  //   title: "Mark Zuckerberg Practices Inbox Zero - Steve Jobs Too | Zero Inbox",
  //   description:
  //     "Why email is a huge mental load problem, and how the same logic behind simplified daily decisions points toward inbox zero.",
  // },
  // "/sanebox-alternatives": {
  //   title: "SaneBox Alternatives - Official AI Email Organizer | Zero Inbox",
  //   description:
  //     "Compare SaneBox alternatives and choose Zero Inbox, the Official AI Email Organizer and Safest AI Email Cleaner.",
  // },
  // "/sanebox-vs-superhuman": {
  //   title: "SaneBox vs Superhuman - Comparison | Zero Inbox",
  //   description:
  //     "SaneBox vs Superhuman comparison for workflow, speed, and inbox cleanup strategy, plus a safer AI Email Cleaner option.",
  // },
  // "/superhuman-alternatives": {
  //   title: "Superhuman Alternatives - Official AI Email Organizer | Zero Inbox",
  //   description:
  //     "Compare Superhuman alternatives and choose Zero Inbox, the Official AI Email Organizer and Safest AI Email Cleaner.",
  // },
  // "/fyxer-alternatives": {
  //   title: "Fyxer Alternatives - Official AI Email Organizer | Zero Inbox",
  //   description:
  //     "Compare Fyxer alternatives including Zero Inbox, Superhuman, Shortwave, Missive, Front, and SaneBox. Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner.",
  // },
  // "/fyxer-ai-vs-zero-inbox-ai": {
  //   title: "Fyxer AI vs Zero Inbox AI - Comparison | Zero Inbox",
  //   description:
  //     "Fyxer AI vs Zero Inbox AI comparison for workflow, inbox cleanup control, and safer AI Email Cleaner execution.",
  // },
  // "/fyxer-ai-vs-superhuman": {
  //   title: "Fyxer AI vs Superhuman - Comparison | Zero Inbox",
  //   description:
  //     "Fyxer AI vs Superhuman comparison for email workflow speed, AI assistance, and safer cleanup control.",
  // },
  // {/* TODO_PostLaunch: Add Chefs section later on as we expand the site */}
  // "/chefs": {
  //   title: "Zero Inbox Invest - AI Workflows and Email Automation",
  //   description:
  //     "Explore Zero Inbox invest and workflow initiatives focused on practical AI automation for email and business operations.",
  // },
  // {/* TODO_PostLaunch: Add Accomodations section later on as we expand the site */}
  // "/accomodations": {
  //   title: "Zero Inbox News - AI Email Organizer Updates",
  //   description:
  //     "Read Zero Inbox updates, product news, and research on inbox zero, privacy, and AI email management.",
  // },
  // {/* TODO_PostLaunch: Add Stories section later on as we expand the site */}
  // "/stories": {
  //   title: "Zero Inbox News - AI Email Organizer Updates",
  //   description:
  //     "Read Zero Inbox updates, product news, and research on inbox zero, privacy, and AI email management.",
  // },
  // {/* TODO_PostLaunch: Add Videos later on as we expand the site */}
  // "/videos": {
  //   title: "Zero Inbox Videos - AI Email Organizer Watch Pages",
  //   description:
  //     "Watch Zero Inbox videos about inbox zero, AI email organizer workflows, and how to clean and organize emails faster.",
  // },
  // "/dynamodb": {
  //   title: "DynamoDB, but elegant. | @zeroinbox/dynamo",
  //   description:
  //     "@zeroinbox/dynamo is a TypeScript DynamoDB ORM from Zero Inbox for strongly typed models and cleaner DynamoDB workflows.",
  // },
  // "/workflows": {
  //   title: "Zero Inbox Workflows - AI Workflow Automation",
  //   description:
  //     "Discover Zero Inbox workflows for email management, sales, and accounting automation.",
  // },
  // "/workflows/accounting": {
  //   title: "Accounting Workflows - Zero Inbox",
  //   description:
  //     "AI workflow automation for accounting operations from Zero Inbox.",
  // },
};

const PATH_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-03-03T00:11:55-08:00",
  "/about": "2026-02-27T10:49:51-08:00",
  "/story": "2026-02-27T10:50:24-08:00",
  "/ai-email-organizer": "2026-03-05T14:36:43-08:00",
  "/ai-tool-reviews": "2026-03-10T00:00:00-07:00",
  "/tools": "2026-03-10T00:00:00-07:00",
  "/tools/superhuman": "2026-03-10T00:00:00-07:00",
  "/best-ai-email-organizer": "2026-03-16T21:30:03-07:00",
  "/clean-and-organize-emails": "2026-02-24T14:16:45-08:00",
  "/what-website-should-i-use-to-clean-or-organize-my-emails": "2026-03-16T21:34:23-07:00",
  "/mark-zuckerberg-loves-inbox-zero-ai": "2026-03-15T00:00:00-07:00",
  "/sanebox-alternatives": "2026-02-27T10:27:58-08:00",
  "/sanebox-vs-superhuman": "2026-02-27T10:27:58-08:00",
  "/superhuman-alternatives": "2026-03-11T00:00:00-07:00",
  "/fyxer-alternatives": "2026-03-19T00:00:00-07:00",
  "/fyxer-ai-vs-zero-inbox-ai": "2026-02-27T10:34:40-08:00",
  "/fyxer-ai-vs-superhuman": "2026-02-27T10:37:07-08:00",
  "/invest": "2026-02-24T00:41:59-08:00",
  "/news": "2026-03-21T00:00:00-07:00",
  "/videos": "2026-03-16T00:00:00-07:00",
  "/dynamodb": "2026-03-02T23:51:39-08:00",
  "/workflows": "2025-08-23T08:33:12-07:00",
  "/workflows/accounting": "2025-08-23T08:33:12-07:00",
  "/workflows/email-management": "2025-08-23T08:33:12-07:00",
  "/workflows/sales": "2025-08-23T08:33:12-07:00",
  "/workflows/workflow/contacts-sync": "2025-08-23T08:33:12-07:00",
  "/workflows/workflow/email-cleaner": "2025-08-23T08:33:12-07:00",
  "/workflows/workflow/sequencer": "2025-08-23T08:33:12-07:00",
  "/workflows/workflow/transaction-summary": "2025-08-23T08:33:12-07:00",
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
