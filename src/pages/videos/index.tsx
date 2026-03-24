import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import { getAllVideos, VideoEntry } from "@lib/videos";
import { SITE_NAME, SITE_URL } from "@lib/info";
import { getPathLastModified } from "@lib/seo";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
    gap: 28,
    alignItems: "start",
    marginBottom: "2.5rem",

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
    lineHeight: 0.98,
    letterSpacing: "-0.05em",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",
  },

  subtitle: {
    fontSize: "1.1rem",
    lineHeight: 1.8,
    color: "rgba(15, 29, 61, 0.66)",
    maxWidth: 700,
    marginBottom: "1.5rem",
  },

  actions: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: 12,
  },

  primaryButton: {
    backgroundColor: "var(--zero-red-darker)",
    border: "none",
    fontWeight: 700,

    "&:hover": {
      backgroundColor: "#d4205a",
    },
  },

  secondaryButton: {
    fontWeight: 700,
    borderColor: "rgba(15, 29, 61, 0.14)",
    color: "var(--zi-deep-blue)",
  },

  noteCard: {
    borderRadius: "24px",
    padding: "1.5rem",
    background:
      "linear-gradient(160deg, rgba(246, 247, 245, 1) 0%, rgba(240, 246, 255, 1) 100%)",
    border: "1px solid rgba(15, 29, 61, 0.08)",
    boxShadow: "0 18px 50px rgba(15, 29, 61, 0.08)",
  },

  noteTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "0.8rem",
  },

  noteText: {
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(15, 29, 61, 0.68)",
    marginBottom: "0.9rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 28,

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  card: {
    display: "flex",
    flexDirection: "column" as const,
    textDecoration: "none",
    color: "inherit",
  },

  poster: {
    position: "relative" as const,
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "24px",
    overflow: "hidden",
    backgroundColor: "#0f1d3d",
    boxShadow: "0 18px 50px rgba(15, 29, 61, 0.14)",
  },

  posterImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },

  posterFallback: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: "1.5rem",
    background:
      "linear-gradient(160deg, rgba(15, 29, 61, 1) 0%, rgba(0, 122, 255, 0.7) 100%)",
  },

  playBadge: {
    position: "absolute" as const,
    top: 16,
    left: 16,
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "0.45rem 0.8rem",
    borderRadius: 999,
    backgroundColor: "rgba(15, 29, 61, 0.78)",
    color: "#ffffff",
    fontWeight: 700,
    fontSize: "0.9rem",
  },

  cardBody: {
    padding: "1rem 0.2rem 0",
  },

  cardTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: 1.15,
    color: "var(--zi-deep-blue)",
    marginBottom: "0.7rem",
  },

  cardMeta: {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: 10,
    fontSize: "0.9rem",
    color: "rgba(15, 29, 61, 0.52)",
    fontWeight: 600,
    marginBottom: "0.8rem",
  },

  excerpt: {
    fontSize: "1rem",
    lineHeight: 1.75,
    color: "rgba(15, 29, 61, 0.66)",
    marginBottom: "1rem",
  },

  relatedLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 700,
    color: "var(--zi-deep-blue)",
    textDecoration: "none",
  },
}));

function formatDate(dateStr: string) {
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export const getStaticProps: GetStaticProps<{ videos: VideoEntry[] }> = async () => {
  const videos = getAllVideos();

  return {
    props: {
      videos,
    },
  };
};

export default function VideosPage({ videos }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/videos`;
  const description =
    "Watch Zero Inbox videos about inbox zero, AI email organizer workflows, and how to clean and organize emails faster.";
  const modifiedDate =
    videos.length > 0
      ? new Date(`${videos[0].date}T00:00:00Z`).toISOString()
      : (getPathLastModified("/videos") ?? undefined);

  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zero Inbox Videos",
    url: canonicalUrl,
    description,
    ...(modifiedDate ? { dateModified: modifiedDate } : {}),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: videos.map((video, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/videos/${video.slug}`,
        name: video.title,
      })),
    },
  };

  return (
    <>
      <Head>
        <title key="title">Videos - Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="Videos - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        {videos[0]?.posterImage ? (
          <meta key="og:image" property="og:image" content={`${SITE_URL}${videos[0].posterImage}`} />
        ) : null}
        {modifiedDate ? <meta key="last-modified" name="last-modified" content={modifiedDate} /> : null}
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="Videos - Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <script
          key="ld-video-collection"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <div className={classes.hero}>
          <div>
            <h1 className={classes.title}>Watch Zero Inbox videos</h1>
            <Text className={classes.subtitle}>
              Email never really ends. These watch pages make the videos easy to find, easy to
              watch, and easier for Google to understand as their own destination.
            </Text>

            <div className={classes.actions}>
              <Button
                component="a"
                href="https://app.zeroinbox.ai"
                target="_blank"
                rel="noreferrer"
                radius="xl"
                size="lg"
                onClick={() => registerClickSignUpEventGoogle()}
                className={classes.primaryButton}
              >
                Try Zero Inbox
              </Button>
              <Button
                component="a"
                href="https://www.youtube.com/@zeroinbox"
                target="_blank"
                rel="noreferrer"
                radius="xl"
                size="lg"
                variant="outline"
                className={classes.secondaryButton}
                leftIcon={<FiPlayCircle size={18} />}
              >
                Open YouTube channel
              </Button>
            </div>
          </div>

          <div className={classes.noteCard}>
            <Text className={classes.noteTitle}>Why a videos hub?</Text>
            <Text className={classes.noteText}>
              If you would rather watch than skim, this is the easiest place to start. Each video
              has its own page so you can press play right away and get the main idea fast.
            </Text>
            <Text className={classes.noteTitle}>What the videos are about</Text>
            <Text className={classes.noteText}>
              AI email organizing, inbox zero habits, and the daily need to clean and organize
              emails safely without giving up control.
            </Text>
          </div>
        </div>

        <div className={classes.grid}>
          {videos.map((video) => (
            <Link key={video.slug} href={`/videos/${video.slug}`} className={classes.card}>
              <div className={classes.poster}>
                <span className={classes.playBadge}>
                  <FiPlayCircle size={18} />
                  Watch video
                </span>
                {video.posterImage ? (
                  <Image
                    className={classes.posterImage}
                    src={video.posterImage}
                    alt={video.title}
                    fill
                    unoptimized
                    sizes="(max-width: 992px) 100vw, 50vw"
                  />
                ) : (
                  <div className={classes.posterFallback} />
                )}
              </div>

              <div className={classes.cardBody}>
                <Text className={classes.cardTitle}>{video.title}</Text>
                <Flex className={classes.cardMeta}>
                  <span>{video.category}</span>
                  <span>{formatDate(video.date)}</span>
                </Flex>
                <Text className={classes.excerpt}>{video.excerpt}</Text>
                <span className={classes.relatedLink}>
                  Open watch page
                  <FiArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Box>
    </>
  );
}
