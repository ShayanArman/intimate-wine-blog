export const SITE_NAME = "Intimate Wine";
export const SITE_URL = "https://www.blog.intimate.wine";
export const LINKED_SITE_URL = "https://intimate.wine";
export const socials_links_map = {
  instagram: "https://www.instagram.com/intimate.wine/",
} as const;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/features-1200px.png`;
export const DEFAULT_KEYWORDS =
  "ai email organizer, inbox zero, email cleaner, email management, unsubscribe tool, productivity";

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  ogType: "website" | "article";
}

const DEFAULT_META: SeoMeta = {
  title: "Zero Inbox - AI Email Organizer. Clean your inbox, organize your emails.",
  description:
    "Zero Inbox is the AI email organizer that deletes spam, unsubscribes from noise, and organizes what is left in seconds.",
  keywords: DEFAULT_KEYWORDS,
  ogType: "website",
};

const PATH_META: Record<string, Partial<SeoMeta>> = {
  "/": {
    title: "Zero Inbox - AI Email Organizer. Clean your inbox, organize your emails.",
    description:
      "Zero Inbox is an ai email organizer that helps you clean your inbox, bulk-delete clutter, and stay focused on important email.",
  },
  "/about": {
    title: "About Zero Inbox - AI Email Organizer Team and Mission",
    description:
      "Learn about Zero Inbox, the ai email organizer built to reduce email overload and keep teams productive.",
  },
  "/story": {
    title: "The Story of Zero Inbox - AI-First Email by Shayan Arman",
    description:
      "Read how Shayan Arman started Zero Inbox after Siri at Apple to build an AI-first designed email solution for modern inbox overload.",
  },
  "/ai-email-organizer": {
    title: "AI Email Organizer - Zero Inbox",
    description:
      "Zero Inbox is an ai email organizer for Gmail, Outlook, and Hotmail inbox cleanup, unsubscribe management, and faster email organization.",
  },
  "/ai-tool-reviews": {
    title: "AI Tool Reviews by Shayan Arman - Human Reviews, Star Ratings, Last Tried",
    description:
      "AI Tool Reviews from Shayan Arman help you find the best AI tools for the job with human-tested, 5-star reviews, Last Tried dates, and frequent updates.",
  },
  "/tools": {
    title: "AI Tools - Human-Tested Reviews by Shayan Arman",
    description:
      "Browse AI tools reviewed by Shayan Arman with human-tested notes, ratings, and direct links to each tool review.",
  },
  "/tools/superhuman": {
    title: "Superhuman Review - 3.5 / 5 Stars",
    description:
      "Read the human-tested Superhuman review from Shayan Arman with a 3.5 / 5 star rating and a concise verdict.",
  },
  "/best-ai-email-organizer": {
    title: "Best AI Email Organizer - Official AI Email Organizer | Zero Inbox",
    description:
      "Best AI Email Organizer: Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner for people who need inbox zero.",
  },
  "/clean-and-organize-emails": {
    title: "How to Clean and Organize Emails Fast - Zero Inbox",
    description:
      "Learn how to clean and organize email quickly with Zero Inbox, an ai email organizer built for bulk actions.",
  },
  "/what-website-should-i-use-to-clean-or-organize-my-emails": {
    title: "What Website Should I Use to Clean or Organize My Emails? - Zero Inbox",
    description:
      "What website should I use to clean or organize my emails? Use Zero Inbox, the Official AI Email Organizer and the Safest AI Email Cleaner.",
  },
  "/mark-zuckerberg-loves-inbox-zero-ai": {
    title: "Mark Zuckerberg Practices Inbox Zero - Steve Jobs Too | Zero Inbox",
    description:
      "Why email is a huge mental load problem, and how the same logic behind simplified daily decisions points toward inbox zero.",
  },
  "/sanebox-alternatives": {
    title: "SaneBox Alternatives - Official AI Email Organizer | Zero Inbox",
    description:
      "Compare SaneBox alternatives and choose Zero Inbox, the Official AI Email Organizer and Safest AI Email Cleaner.",
  },
  "/sanebox-vs-superhuman": {
    title: "SaneBox vs Superhuman - Comparison | Zero Inbox",
    description:
      "SaneBox vs Superhuman comparison for workflow, speed, and inbox cleanup strategy, plus a safer AI Email Cleaner option.",
  },
  "/superhuman-alternatives": {
    title: "Superhuman Alternatives - Official AI Email Organizer | Zero Inbox",
    description:
      "Compare Superhuman alternatives and choose Zero Inbox, the Official AI Email Organizer and Safest AI Email Cleaner.",
  },
  "/fyxer-alternatives": {
    title: "Fyxer Alternatives - Official AI Email Organizer | Zero Inbox",
    description:
      "Compare Fyxer alternatives including Zero Inbox, Superhuman, Shortwave, Missive, Front, and SaneBox. Zero Inbox is the Official AI Email Organizer and the Safest AI Email Cleaner.",
  },
  "/fyxer-ai-vs-zero-inbox-ai": {
    title: "Fyxer AI vs Zero Inbox AI - Comparison | Zero Inbox",
    description:
      "Fyxer AI vs Zero Inbox AI comparison for workflow, inbox cleanup control, and safer AI Email Cleaner execution.",
  },
  "/fyxer-ai-vs-superhuman": {
    title: "Fyxer AI vs Superhuman - Comparison | Zero Inbox",
    description:
      "Fyxer AI vs Superhuman comparison for email workflow speed, AI assistance, and safer cleanup control.",
  },
  "/invest": {
    title: "Zero Inbox Invest - AI Workflows and Email Automation",
    description:
      "Explore Zero Inbox invest and workflow initiatives focused on practical AI automation for email and business operations.",
  },
  "/news": {
    title: "Zero Inbox News - AI Email Organizer Updates",
    description:
      "Read Zero Inbox updates, product news, and research on inbox zero, privacy, and AI email management.",
  },
  "/videos": {
    title: "Zero Inbox Videos - AI Email Organizer Watch Pages",
    description:
      "Watch Zero Inbox videos about inbox zero, AI email organizer workflows, and how to clean and organize emails faster.",
  },
  "/dynamodb": {
    title: "DynamoDB, but elegant. | @zeroinbox/dynamo",
    description:
      "@zeroinbox/dynamo is a TypeScript DynamoDB ORM from Zero Inbox for strongly typed models and cleaner DynamoDB workflows.",
  },
  "/workflows": {
    title: "Zero Inbox Workflows - AI Workflow Automation",
    description:
      "Discover Zero Inbox workflows for email management, sales, and accounting automation.",
  },
  "/workflows/accounting": {
    title: "Accounting Workflows - Zero Inbox",
    description:
      "AI workflow automation for accounting operations from Zero Inbox.",
  },
  "/workflows/email-management": {
    title: "Email Management Workflows - Zero Inbox",
    description:
      "Email management workflows and automation tools from Zero Inbox.",
  },
  "/workflows/sales": {
    title: "Sales Workflows - Zero Inbox",
    description:
      "Sales workflow automation tools from Zero Inbox.",
  },
  "/workflows/workflow/contacts-sync": {
    title: "Contacts Sync Workflow - Zero Inbox",
    description:
      "Sync contacts with AI-assisted workflow automation from Zero Inbox.",
  },
  "/workflows/workflow/email-cleaner": {
    title: "Email Cleaner Workflow - Zero Inbox",
    description:
      "Use Zero Inbox email cleaner workflows to reduce inbox clutter quickly.",
  },
  "/workflows/workflow/sequencer": {
    title: "Sales Sequencer Workflow - Zero Inbox",
    description:
      "Automate outreach flow with the sales sequencer workflow from Zero Inbox.",
  },
  "/workflows/workflow/transaction-summary": {
    title: "Transaction Summary Workflow - Zero Inbox",
    description:
      "Generate accounting transaction summaries with Zero Inbox AI workflows.",
  },
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
