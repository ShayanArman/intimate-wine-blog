import { GetStaticProps, InferGetStaticPropsType } from "next";
import NewsSection from "@/Components/NewsSection";
import { getAllNews, NewsArticle } from "@/lib/news";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{ articles: NewsArticle[] }> = async () => {
  const articles = getAllNews();
  return { props: { articles } };
};

export default function NewsPage({ articles }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>News — Zero Inbox</title>
        <meta
          name="description"
          content="The latest updates, research, and product news from Zero Inbox."
        />
      </Head>
      <NewsSection articles={articles} />
    </>
  );
}
