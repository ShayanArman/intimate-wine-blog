import { GetStaticProps, InferGetStaticPropsType } from "next";
import NewsSection from "@/Components/NewsSection";
import { getAllNews, NewsArticle } from "@/lib/news";
import Head from "next/head";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const getStaticProps: GetStaticProps<{ articles: NewsArticle[] }> = async () => {
  const articles = getAllNews();
  return { props: { articles } };
};

export default function NewsPage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  const canonicalUrl = `${SITE_URL}/news`;
  const description = "The latest updates, research, and product news from Zero Inbox.";

  const newsCollectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Zero Inbox News",
    url: canonicalUrl,
    description,
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
        <meta key="description" name="description" content={description} />
        <meta key="og:title" property="og:title" content="News - Zero Inbox" />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content="News - Zero Inbox" />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
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
