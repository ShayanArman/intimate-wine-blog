import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllNews, getNewsArticle, NewsArticle } from "@/lib/news";
import { createStyles, Box, Text, Flex, Button } from "@mantine/core";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 760,
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
    marginBottom: "2rem",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "var(--zi-deep-blue)",
    },
  },

  meta: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: "0.85rem",
    color: "rgba(15, 29, 61, 0.5)",
    fontWeight: 500,
    marginBottom: "1rem",
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
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "2.4rem",
    lineHeight: 1.15,
    color: "var(--zi-deep-blue)",
    marginBottom: "1rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.8rem",
    },
  },

  excerpt: {
    fontSize: "1.15rem",
    lineHeight: 1.7,
    color: "rgba(15, 29, 61, 0.6)",
    marginBottom: "1rem",
  },

  ctaWrap: {
    marginBottom: "2.5rem",
  },

  ctaButton: {
    backgroundColor: "var(--zero-red-darker)",
    border: "none",
    fontWeight: 700,
    fontSize: "1rem",
    transition: "all var(--transition-smooth)",

    "&:hover": {
      backgroundColor: "#d4205a",
      transform: "translateY(-2px)",
      boxShadow: "0 10px 24px rgba(255, 50, 119, 0.25)",
    },
  },

  videoWrap: {
    position: "relative" as const,
    width: "100%",
    aspectRatio: "16 / 9",
    marginBottom: "1.25rem",
    borderRadius: "var(--radius-md)",
    overflow: "hidden",
    backgroundColor: "#000000",
    boxShadow: "0 14px 40px rgba(15, 29, 61, 0.12)",
  },

  mediaImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    display: "block",
  },

  mediaFallback: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },

  mediaFallbackText: {
    fontFamily: "var(--font-heading)",
    fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "#ffffff",
    textAlign: "center" as const,
    textWrap: "balance" as const,
  },

  videoFrame: {
    width: "100%",
    height: "100%",
    border: 0,
    display: "block",
  },

  body: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "var(--zi-deep-blue)",

    "& h2": {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: "1.5rem",
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

    "& table": {
      width: "100%",
      borderCollapse: "collapse" as const,
      marginBottom: "1.5rem",
      fontSize: "0.95rem",
    },

    "& th, & td": {
      padding: "10px 14px",
      border: "1px solid rgba(15, 29, 61, 0.1)",
      textAlign: "left" as const,
    },

    "& th": {
      backgroundColor: "rgba(15, 29, 61, 0.04)",
      fontWeight: 700,
    },
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

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllNews();
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ article: NewsArticle }> = async ({ params }) => {
  const article = await getNewsArticle(params?.slug as string);
  if (!article) return { notFound: true };
  return { props: { article } };
};

export default function ArticlePage({ article }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/news/${article.slug}`;
  const articleImageUrl = article.thumbnail ? `${SITE_URL}${article.thumbnail}` : DEFAULT_OG_IMAGE;
  const isoDate = new Date(`${article.date}T00:00:00Z`).toISOString();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    image: [articleImageUrl],
    mainEntityOfPage: canonicalUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/zeroInboxLogoBlack.svg`,
      },
    },
  };

  return (
    <>
      <Head>
        <title key="title">{`${article.title} - Zero Inbox`}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={article.excerpt} />
        <meta key="og:title" property="og:title" content={`${article.title} - Zero Inbox`} />
        <meta key="og:description" property="og:description" content={article.excerpt} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={articleImageUrl} />
        <meta key="og:updated_time" property="og:updated_time" content={isoDate} />
        <meta key="last-modified" name="last-modified" content={isoDate} />
        <meta key="article:published_time" property="article:published_time" content={isoDate} />
        <meta key="article:modified_time" property="article:modified_time" content={isoDate} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={`${article.title} - Zero Inbox`} />
        <meta key="twitter:description" name="twitter:description" content={article.excerpt} />
        <meta key="twitter:image" name="twitter:image" content={articleImageUrl} />
        <script
          key="ld-news-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <Link href="/news" className={classes.backLink}>
          <FiArrowLeft size={16} />
          Back to News
        </Link>

        <Flex className={classes.meta}>
          <span className={classes.category}>{article.category}</span>
          <span className={classes.dot} />
          <span>{formatDate(article.date)}</span>
        </Flex>

        <h1 className={classes.title}>{article.title}</h1>

        <Text className={classes.excerpt}>{article.excerpt}</Text>

        {article.videoEmbedUrl ? (
          <div className={classes.videoWrap}>
            <iframe
              className={classes.videoFrame}
              src={article.videoEmbedUrl}
              title={`${article.title} video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : article.thumbnail ? (
          <div className={classes.videoWrap}>
            <Image
              className={classes.mediaImage}
              src={article.thumbnail}
              alt={article.title}
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 100vw, 760px"
            />
          </div>
        ) : (
          <div className={classes.videoWrap}>
            <div className={classes.mediaFallback}>
              <span className={classes.mediaFallbackText}>
                {article.imageFallbackText ?? article.title}
              </span>
            </div>
          </div>
        )}

        <div className={classes.ctaWrap}>
          <Button
            component="a"
            href="https://app.zeroinbox.ai"
            target="_blank"
            rel="noreferrer"
            radius="xl"
            size="lg"
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Try Zero Inbox today
          </Button>
        </div>

        <div
          className={classes.body}
          dangerouslySetInnerHTML={{ __html: article.content ?? "" }}
        />
      </Box>
    </>
  );
}
