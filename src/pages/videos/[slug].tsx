import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { createStyles, Box, Text, Button, Flex } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";
import { FiArrowLeft, FiPlayCircle } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";
import { getAllVideos, getVideoBySlug, VideoEntry } from "@/lib/videos";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 1120,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "rgba(15, 29, 61, 0.5)",
    textDecoration: "none",
    marginBottom: "1.6rem",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "var(--zi-deep-blue)",
    },
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.4fr) minmax(280px, 0.8fr)",
    gap: 28,
    alignItems: "start",
    marginBottom: "2rem",

    [theme.fn.smallerThan("md")]: {
      gridTemplateColumns: "1fr",
    },
  },

  meta: {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: 10,
    fontSize: "0.9rem",
    color: "rgba(15, 29, 61, 0.55)",
    fontWeight: 600,
    marginBottom: "1rem",
  },

  metaTag: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.35rem 0.8rem",
    borderRadius: 999,
    backgroundColor: "rgba(0, 122, 255, 0.08)",
    color: "var(--zi-electric-blue)",
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "clamp(2.4rem, 5vw, 4rem)",
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",
  },

  subtitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: "1.25rem",
    lineHeight: 1.45,
    color: "rgba(15, 29, 61, 0.72)",
    marginBottom: "1rem",
  },

  excerpt: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "rgba(15, 29, 61, 0.66)",
    marginBottom: "1.6rem",
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

  sidebarCard: {
    borderRadius: "24px",
    padding: "1.5rem",
    background:
      "linear-gradient(160deg, rgba(246, 247, 245, 1) 0%, rgba(240, 246, 255, 1) 100%)",
    border: "1px solid rgba(15, 29, 61, 0.08)",
    boxShadow: "0 18px 50px rgba(15, 29, 61, 0.08)",
  },

  sidebarLabel: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "0.95rem",
    color: "var(--zi-deep-blue)",
    marginBottom: "0.7rem",
  },

  sidebarText: {
    fontSize: "0.98rem",
    lineHeight: 1.7,
    color: "rgba(15, 29, 61, 0.68)",
    marginBottom: "0.95rem",
  },

  sidebarList: {
    paddingLeft: "1.2rem",
    margin: 0,
    color: "var(--zi-deep-blue)",
    lineHeight: 1.8,

    "& li": {
      marginBottom: "0.45rem",
    },
  },

  playerWrap: {
    position: "relative" as const,
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: "28px",
    overflow: "hidden",
    backgroundColor: "#000000",
    boxShadow: "0 24px 60px rgba(15, 29, 61, 0.16)",
    marginBottom: "2rem",
  },

  player: {
    width: "100%",
    height: "100%",
    border: 0,
    display: "block",
  },

  body: {
    maxWidth: 760,
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "var(--zi-deep-blue)",

    "& h2": {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "1.55rem",
      marginTop: "2rem",
      marginBottom: "0.8rem",
    },

    "& p": {
      marginBottom: "1.2rem",
    },

    "& ul, & ol": {
      paddingLeft: "1.5rem",
      marginBottom: "1.2rem",
    },

    "& li": {
      marginBottom: "0.5rem",
    },

    "& strong": {
      fontWeight: 700,
    },
  },

  relatedLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 700,
    color: "var(--zi-deep-blue)",
    textDecoration: "none",
    marginTop: "1.25rem",
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

export const getStaticPaths: GetStaticPaths = async () => {
  const videos = getAllVideos();

  return {
    paths: videos.map((video) => ({ params: { slug: video.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ video: VideoEntry }> = async ({ params }) => {
  const video = await getVideoBySlug(params?.slug as string);

  if (!video) {
    return { notFound: true };
  }

  return {
    props: {
      video,
    },
  };
};

export default function VideoPage({ video }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/videos/${video.slug}`;
  const isoDate = new Date(`${video.date}T00:00:00Z`).toISOString();
  const pageImageUrl = video.posterImage ? `${SITE_URL}${video.posterImage}` : DEFAULT_OG_IMAGE;

  const videoStructuredData = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.excerpt,
    thumbnailUrl: [video.thumbnailUrl],
    uploadDate: isoDate,
    embedUrl: video.embedUrl,
    mainEntityOfPage: canonicalUrl,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Videos",
        item: `${SITE_URL}/videos`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: video.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">{`${video.title} | Zero Inbox Video`}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={video.excerpt} />
        <meta key="og:title" property="og:title" content={`${video.title} | Zero Inbox Video`} />
        <meta key="og:description" property="og:description" content={video.excerpt} />
        <meta key="og:type" property="og:type" content="video.other" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={pageImageUrl} />
        <meta key="og:video" property="og:video" content={video.embedUrl} />
        <meta key="og:video:secure_url" property="og:video:secure_url" content={video.embedUrl} />
        <meta key="og:video:type" property="og:video:type" content="text/html" />
        <meta key="og:video:width" property="og:video:width" content="1280" />
        <meta key="og:video:height" property="og:video:height" content="720" />
        <meta key="last-modified" name="last-modified" content={isoDate} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={`${video.title} | Zero Inbox Video`} />
        <meta key="twitter:description" name="twitter:description" content={video.excerpt} />
        <meta key="twitter:image" name="twitter:image" content={pageImageUrl} />
        <script
          key="ld-video-object"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
        />
        <script
          key="ld-video-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Link href="/videos" className={classes.backLink}>
          <FiArrowLeft size={16} />
          Back to Videos
        </Link>

        <div className={classes.hero}>
          <div>
            <Flex className={classes.meta}>
              <span className={classes.metaTag}>{video.category}</span>
              <span>{formatDate(video.date)}</span>
            </Flex>

            <h1 className={classes.title}>{video.title}</h1>
            {video.subtitle ? <Text className={classes.subtitle}>{video.subtitle}</Text> : null}
            <Text className={classes.excerpt}>{video.excerpt}</Text>

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
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                radius="xl"
                size="lg"
                variant="outline"
                className={classes.secondaryButton}
                leftIcon={<FiPlayCircle size={18} />}
              >
                Watch on YouTube
              </Button>
            </div>
          </div>

          <div className={classes.sidebarCard}>
            <Text className={classes.sidebarLabel}>Why this page exists</Text>
            <Text className={classes.sidebarText}>
              This page puts the video first, so you can watch immediately and get the point
              without digging through a longer article first.
            </Text>
            <Text className={classes.sidebarLabel}>What Zero Inbox stands for</Text>
            <ul className={classes.sidebarList}>
              <li>The Official AI Email Organizer.</li>
              <li>The Safest AI Email Cleaner.</li>
              <li>Asks for Permission everytime.</li>
            </ul>
          </div>
        </div>

        <div className={classes.playerWrap}>
          <iframe
            className={classes.player}
            src={video.embedUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: video.content ?? "" }}
        />

        {video.relatedUrl && video.relatedLabel ? (
          <Link href={video.relatedUrl} className={classes.relatedLink}>
            <FiArrowLeft size={16} />
            {video.relatedLabel}
          </Link>
        ) : null}
      </Box>
    </>
  );
}
