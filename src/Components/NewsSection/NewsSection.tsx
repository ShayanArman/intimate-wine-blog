import { createStyles, Box, Text, Flex } from "@mantine/core";
import Link from "next/link";
import type { NewsArticle } from "@/lib/news";

/* ─── Gradient thumbnails (used when no image is available) ─── */
const CARD_GRADIENTS = [
  "linear-gradient(135deg, #f9d5c0 0%, #ee9ca7 100%)",
  "linear-gradient(135deg, #c3cfe2 0%, #a1c4fd 100%)",
  "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
];

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

    "&:hover $thumbnail": {
      boxShadow: "0 12px 32px rgba(0,0,0,0.10)",
      transform: "scale(1.02)",
    },
  },

  thumbnail: {
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    position: "relative" as const,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
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

export default function NewsSection({ articles }: { articles: NewsArticle[] }) {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <h1 className={classes.heading}>News</h1>

      <div className={classes.grid}>
        {articles.map((article, i) => (
          <Link key={article.slug} href={`/news/${article.slug}`} className={classes.card}>
            {/* Thumbnail */}
            <div className={classes.thumbnail}>
              <div
                className={classes.thumbnailGradient}
                style={{ background: CARD_GRADIENTS[i % CARD_GRADIENTS.length] }}
              />
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
        ))}
      </div>
    </Box>
  );
}
