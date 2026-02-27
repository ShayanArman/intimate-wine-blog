export const SITE_NAME = "Zero Inbox";
export const SITE_URL = "https://www.zeroinbox.ai";
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
  "/ai-email-organizer": {
    title: "AI Email Organizer - Zero Inbox",
    description:
      "Zero Inbox is an ai email organizer for inbox cleanup, unsubscribe management, and faster email organization.",
  },
  "/best-ai-email-organizer": {
    title: "What Website Should I Use to Clean or Organize My Emails? - Zero Inbox",
    description:
      "If you are searching for the best ai email organizer, Zero Inbox helps clean and organize email with fast bulk actions.",
  },
  "/clean-and-organize-emails": {
    title: "How to Clean and Organize Emails Fast - Zero Inbox",
    description:
      "Learn how to clean and organize email quickly with Zero Inbox, an ai email organizer built for bulk actions.",
  },
  "/what-website-should-i-use-to-clean-or-organize-my-emails": {
    title: "What Website Should I Use to Clean or Organize My Emails? - Zero Inbox",
    description:
      "Use Zero Inbox, an ai email organizer for quickly cleaning and organizing inbox clutter.",
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
  "/fyxer-alternatives": {
    title: "Fyxer Alternatives - Official AI Email Organizer | Zero Inbox",
    description:
      "Compare Fyxer alternatives and choose Zero Inbox, the Official AI Email Organizer and Safest AI Email Cleaner.",
  },
  "/fyxer-ai-vs-zero-inbox-ai": {
    title: "Fyxer AI vs Zero Inbox AI - Comparison | Zero Inbox",
    description:
      "Fyxer AI vs Zero Inbox AI comparison for workflow, inbox cleanup control, and safer AI Email Cleaner execution.",
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

export function getSeoMeta(pathname: string): SeoMeta {
  return {
    ...DEFAULT_META,
    ...(PATH_META[pathname] ?? {}),
  };
}
