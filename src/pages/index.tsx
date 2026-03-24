import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllNews, NewsArticle } from "@lib/news";
import NewsSection from "@/components/NewsSection";
import { getPathLastModified } from "@lib/seo";
import { MAIN_PAGE_DESCRIPTION, SITE_NAME, SITE_URL } from "@lib/info";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{ articles: NewsArticle[] }> = async () => {
  const articles = getAllNews();
  return { props: { articles } };
};

function toArticleIsoDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toISOString();
}

function getLatestModifiedDate(articleDates: string[], pageModifiedDate?: string | null): string | undefined {
  const timestamps = articleDates
    .map((value) => Date.parse(value))
    .filter((value) => Number.isFinite(value));

  if (pageModifiedDate) {
    const pageTimestamp = Date.parse(pageModifiedDate);

    if (Number.isFinite(pageTimestamp)) {
      timestamps.push(pageTimestamp);
    }
  }

  if (timestamps.length === 0) {
    return undefined;
  }

  return new Date(Math.max(...timestamps)).toISOString();
}

export default function HomePage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const canonicalUrl = SITE_URL;
  const description = MAIN_PAGE_DESCRIPTION;
  const collectionImageUrl = `${SITE_URL}/images/news/ai-email-revolution.webp`;
  const articleDates = articles.map((article) => toArticleIsoDate(article.date));
  const modifiedDate = getLatestModifiedDate(articleDates, getPathLastModified("/"));

  const newsCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${SITE_NAME} Blog`,
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
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${SITE_URL}/${article.slug}`,
          name: article.title,
        })),
      },
  };

  return (
    <>
      <Head>
        <title key="title">{`${SITE_NAME} Blog`}</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link key="related-videos" rel="related" href={`${SITE_URL}/videos`} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content={`${SITE_NAME} Blog`} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={collectionImageUrl} />
        {modifiedDate ? <meta key="og:updated_time" property="og:updated_time" content={modifiedDate} /> : null}
        {modifiedDate ? <meta key="last-modified" name="last-modified" content={modifiedDate} /> : null}
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={`${SITE_NAME} Blog`} />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={collectionImageUrl} />
        <script
          key="ld-news-collection"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(newsCollectionStructuredData) }}
        />
      </Head>
      <NewsSection articles={articles} />
    </>
  );
}
