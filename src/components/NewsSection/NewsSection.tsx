import { createStyles, Box, Text, Flex } from "@mantine/core";
import Link from "next/link";
import type { NewsArticle } from "@/lib/news";

/* ─── Gradient thumbnails (used when no image is available) ─── */
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #f9d5c0 0%, #ee9ca7 100%)",
  "linear-gradient(135deg, #c3cfe2 0%, #a1c4fd 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
];

const THUMBNAIL_HOVER_CLASS = "news-thumbnail";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("md")]: {
      padding: "5rem 1.5rem 3rem",
    },
  },

  heading: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "3rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "2.5rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2rem",
      marginBottom: "1.5rem",
    },
  },

  intentLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: "1.8rem",
  },

  intentLink: {
    color: "var(--zi-deep-blue)",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 32,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column" as const,
    cursor: "pointer",

    [`&:hover .${THUMBNAIL_HOVER_CLASS}`]: {
      transform: "translateY(-4px)",
      borderColor: "rgba(15, 29, 61, 0.2)",
      boxShadow: "0 14px 30px rgba(15, 29, 61, 0.14)",
    },
  },

  thumbnail: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    position: "relative" as const,
    border: "1px solid rgba(15, 29, 61, 0.08)",
    transition: "transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease",
  },

  thumbnailImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },

  thumbnailGradient: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  thumbnailCommand: {
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
    color: "#ffffff",
    fontSize: "clamp(0.78rem, 1.7vw, 1rem)",
    lineHeight: 1.25,
    letterSpacing: "-0.01em",
    fontWeight: 500,
    textShadow: "0 2px 18px rgba(255, 255, 255, 0.25)",
    textAlign: "center" as const,
    padding: "0 0.8rem",
  },

  cardBody: {
    padding: "16px 4px 8px",
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.1rem",
    lineHeight: 1.35,
    color: "var(--zi-deep-blue)",
    marginBottom: 10,
  },

  meta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.85rem",
    color: "rgba(15, 29, 61, 0.5)",
    fontWeight: 500,
  },

  category: {
    color: "rgba(15, 29, 61, 0.7)",
    fontWeight: 600,
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: "50%",
    backgroundColor: "rgba(15, 29, 61, 0.3)",
    flexShrink: 0,
  },
}));

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getThumbnailCenterText(article: NewsArticle): string | null {
  if (article.slug === "zeroinbox-dynamo-launch") {
    return "npm i @zeroinbox/dynamo";
  }

  if (article.slug === "ai-email-revolution") {
    return "AI Email Revolution";
  }

  if (article.slug === "privacy-first-approach") {
    return "Privacy First AI";
  }

  if (article.slug === "inbox-zero-productivity") {
    return "Inbox Zero and Productivity";
  }

  return null;
}

function getThumbnailBackground(article: NewsArticle, index: number): string {
  if (article.slug === "zeroinbox-dynamo-launch") {
    return "linear-gradient(145deg, #000000 0%, #060606 65%, #111111 100%)";
  }

  if (getThumbnailCenterText(article)) {
    return `linear-gradient(145deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.24) 100%), ${CARD_GRADIENTS[index % CARD_GRADIENTS.length]}`;
  }

  return CARD_GRADIENTS[index % CARD_GRADIENTS.length];
}

export default function NewsSection({ articles }: { articles: NewsArticle[] }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <h1 className={classes.heading}>News</h1>
      <div className={classes.intentLinks}>
        <Link href="/ai-email-organizer" className={classes.intentLink}>AI Email Organizer</Link>
        <Link href="/best-ai-email-organizer" className={classes.intentLink}>Best AI Email Organizer</Link>
        <Link href="/clean-and-organize-emails" className={classes.intentLink}>How to Clean and Organize Emails</Link>
        <Link href="/what-website-should-i-use-to-clean-or-organize-my-emails" className={classes.intentLink}>
          Exact Match Answer
        </Link>
      </div>

      <div className={classes.grid}>
        {articles.map((article, i) => {
          const centerText = getThumbnailCenterText(article);

          return (
            <Link key={article.slug} href={`/news/${article.slug}`} className={classes.card}>
              {/* Thumbnail */}
              <div className={`${classes.thumbnail} ${THUMBNAIL_HOVER_CLASS}`}>
                <div
                  className={classes.thumbnailGradient}
                  style={{ background: getThumbnailBackground(article, i) }}
                >
                  {centerText && (
                    <span className={classes.thumbnailCommand}>{centerText}</span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className={classes.cardBody}>
                <Text className={classes.cardTitle}>{article.title}</Text>
                <Flex className={classes.meta}>
                  <span className={classes.category}>{article.category}</span>
                  <span className={classes.dot} />
                  <span>{formatDate(article.date)}</span>
                </Flex>
              </div>
            </Link>
          );
        })}
      </div>
    </Box>
  );
}
