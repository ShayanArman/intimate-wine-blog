import { GetStaticProps, InferGetStaticPropsType } from "next";
import NewsSection from "@/components/NewsSection";
import { getAllNews, NewsArticle } from "@/lib/news";
import Head from "next/head";
import { SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

export const getStaticProps: GetStaticProps<{ articles: NewsArticle[] }> = async () => {
  const articles = getAllNews();
  return { props: { articles } };
};

export default function NewsPage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const canonicalUrl = `${SITE_URL}/news`;
  const description = "The latest updates, research, and product news from Zero Inbox.";
  const collectionImageUrl = `${SITE_URL}/images/news/ai-email-revolution.webp`;
  const modifiedDate = articles.length > 0
    ? new Date(`${articles[0].date}T00:00:00Z`).toISOString()
    : (getPathLastModified("/news") ?? undefined);

  const newsCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zero Inbox News",
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
        url: `${SITE_URL}/news/${article.slug}`,
        name: article.title,
      })),
    },
  };

  return (
    <>
      <Head>
        <title key="title">News - Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <link key="related-videos" rel="related" href={`${SITE_URL}/videos`} />
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="News - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={collectionImageUrl} />
        {modifiedDate ? <meta key="og:updated_time" property="og:updated_time" content={modifiedDate} /> : null}
        {modifiedDate ? <meta key="last-modified" name="last-modified" content={modifiedDate} /> : null}
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="News - Zero Inbox" />
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
