import Head from "next/head";
import Link from "next/link";
import { Box, Button, Flex, Text, createStyles } from "@mantine/core";
import { FiArrowRight } from "react-icons/fi";
import { registerClickSignUpEventGoogle } from "@/components/Analytics/GoogleAnalytics";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, getPathLastModified } from "@/lib/seo";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    maxWidth: 860,
    margin: "0 auto",
    padding: "6rem 2rem 4rem",

    [theme.fn.smallerThan("sm")]: {
      padding: "5rem 1.2rem 3rem",
    },
  },

  title: {
    fontFamily: "var(--font-heading)",
    fontWeight: 800,
    fontSize: "2.6rem",
    color: "var(--zi-deep-blue)",
    letterSpacing: "-1px",
    lineHeight: 1.05,
    marginBottom: "0.8rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "1.95rem",
    },
  },

  subtitle: {
    color: "rgba(15, 29, 61, 0.62)",
    fontSize: "1.15rem",
    lineHeight: 1.6,
    marginBottom: "1.2rem",
  },

  lead: {
    color: "rgba(15, 29, 61, 0.82)",
    fontSize: "1.08rem",
    lineHeight: 1.8,
    marginBottom: "1rem",
  },

  pullQuote: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.45rem",
    lineHeight: 1.45,
    color: "var(--zi-deep-blue)",
    marginTop: "1.8rem",
    marginBottom: "1rem",
  },

  sectionTitle: {
    fontFamily: "var(--font-heading)",
    fontWeight: 700,
    fontSize: "1.4rem",
    marginTop: "1.9rem",
    marginBottom: "0.65rem",
    color: "var(--zi-deep-blue)",
  },

  list: {
    margin: 0,
    paddingLeft: "1.2rem",
    color: "rgba(15, 29, 61, 0.84)",
    lineHeight: 1.75,

    "& li": {
      marginBottom: "0.55rem",
    },
  },

  ctaWrap: {
    marginTop: "2rem",
  },

  ctaButton: {
    border: "none",
    fontWeight: 700,
    backgroundColor: "var(--zero-red-darker)",

    "&:hover": {
      backgroundColor: "#d4205a",
    },
  },

  links: {
    marginTop: "1.3rem",
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },

  link: {
    color: "var(--zi-deep-blue)",
    fontWeight: 600,
    textDecoration: "underline",
    textUnderlineOffset: "3px",
  },
}));

export default function MarkZuckerbergLovesInboxZeroPage() {
  const { classes } = useStyles();
  const canonicalUrl = `${SITE_URL}/mark-zuckerberg-loves-inbox-zero-ai`;
  const title = "Mark Zuckerberg Practices Inbox Zero AI";
  const subtitle = "Steve Jobs too.";
  const description =
    "Mark Zuckerberg and Steve Jobs simplified daily choices to reduce mental load. Inbox zero follows the same logic: remove recurring email decisions so your mind can focus on what matters.";
  const publishDate = "2026-03-15T00:00:00-07:00";
  const modifiedDate = getPathLastModified("/mark-zuckerberg-loves-inbox-zero-ai") ?? publishDate;

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    alternativeHeadline: subtitle,
    description,
    datePublished: publishDate,
    dateModified: modifiedDate,
    image: [DEFAULT_OG_IMAGE],
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

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      <Head>
        <title key="title">Mark Zuckerberg Practices Inbox Zero - Steve Jobs Too | Zero Inbox</title>
        <link key="canonical" rel="canonical" href={canonicalUrl} />
        <meta key="description" name="description" content={description} />
        <meta
          key="keywords"
          name="keywords"
          content="mark zuckerberg inbox zero, email mental load, inbox zero, AI Email Organizer, Email Cleaner"
        />
        <meta
          key="og:title"
          property="og:title"
          content="Mark Zuckerberg Practices Inbox Zero - Steve Jobs Too | Zero Inbox"
        />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:type" property="og:type" content="article" />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:image" property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta key="og:updated_time" property="og:updated_time" content={modifiedDate} />
        <meta key="article:published_time" property="article:published_time" content={publishDate} />
        <meta key="article:modified_time" property="article:modified_time" content={modifiedDate} />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta
          key="twitter:title"
          name="twitter:title"
          content="Mark Zuckerberg Practices Inbox Zero - Steve Jobs Too | Zero Inbox"
        />
        <meta key="twitter:description" name="twitter:description" content={description} />
        <meta key="twitter:image" name="twitter:image" content={DEFAULT_OG_IMAGE} />
        <script
          key="ld-article-mark-zuckerberg-loves-inbox-zero-ai"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        <script
          key="ld-breadcrumb-mark-zuckerberg-loves-inbox-zero-ai"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
        />
      </Head>

      <Box className={classes.container}>
        <h1 className={classes.title}>{title}</h1>
        <Text className={classes.subtitle}>{subtitle}</Text>

        <Text className={classes.lead}>
          Mark Zuckerberg became famous for wearing the same kind of clothes every day. Steve Jobs did something similar with
          his black mock turtleneck uniform. The point was not fashion. The point was reducing low-value choices so more mental
          energy stayed available for work that actually mattered.
        </Text>

        <Text className={classes.lead}>
          Whether or not either man used the phrase <strong>inbox zero</strong>, the principle is the same. Email is not just a
          pile of messages. It is a pile of unfinished decisions: reply, ignore, archive, unsubscribe, forward, or follow up
          later. When those decisions stack up, email becomes a quiet mental load that follows you around all day.
        </Text>

        <Text className={classes.pullQuote}>Clothes are one decision. Email can be hundreds.</Text>

        <Text className={classes.lead}>
          That is why email feels heavier than it looks. It is not only the volume. It is the number of open loops hiding
          inside the volume. Every unread message asks your brain for attention, even if you do not open it yet.
        </Text>

        <h2 className={classes.sectionTitle}>Why email creates so much mental load</h2>
        <ul className={classes.list}>
          <li>Modern life keeps generating more email from work, shopping, travel, banking, apps, and subscriptions.</li>
          <li>Important messages get buried under newsletters, promotions, spam, and low-value threads.</li>
          <li>Manual cleanup keeps getting postponed because there is always something more urgent to do.</li>
          <li>Each unread message becomes a tiny background task competing for mental bandwidth.</li>
        </ul>

        <h2 className={classes.sectionTitle}>What Zuckerberg and Jobs actually teach</h2>
        <Text className={classes.lead}>
          The useful lesson is not that everyone should copy their wardrobe. The lesson is that high performers remove
          recurring low-value decisions when they can. Zuckerberg publicly framed his uniform as a way to avoid wasting energy
          on small choices. Jobs treated his uniform as an easy daily default. Both helped build companies that later reached
          trillion-dollar valuations. The practical takeaway is simple: if a repetitive decision does not deserve your best
          attention, systemize it.
        </Text>

        <h2 className={classes.sectionTitle}>Why inbox zero matters</h2>
        <Text className={classes.lead}>
          Inbox zero is not about a screenshot. It is not about pretending email ends. It is about reducing the background drag
          of unresolved messages so you can think more clearly, miss fewer important emails, and stop carrying inbox stress into
          everything else.
        </Text>

        <ul className={classes.list}>
          <li>Less clutter means less dread when you open your inbox.</li>
          <li>Fewer open loops means more attention for the work in front of you.</li>
          <li>Cleaner email makes important receipts, approvals, and personal notes easier to find.</li>
          <li>Regular inbox maintenance works because email is ongoing, not one-time.</li>
        </ul>

        <h2 className={classes.sectionTitle}>Why Zero Inbox fits this need</h2>
        <Text className={classes.lead}>
          <strong>{SITE_NAME}</strong> exists for exactly this problem. We are the <strong>Official AI Email Organizer</strong>{" "}
          and the <strong>Safest AI Email Cleaner</strong>. Zero Inbox asks for <strong>Permission everytime</strong> and does
          not auto-delete your emails like the other AI Email Cleaners. The goal is not flashy automation. The goal is to make
          the never-ending part of email lighter.
        </Text>

        <Flex className={classes.ctaWrap}>
          <Button
            component="a"
            href="https://app.zeroinbox.ai"
            target="_blank"
            size="lg"
            radius="xl"
            rightIcon={<FiArrowRight />}
            onClick={() => registerClickSignUpEventGoogle()}
            className={classes.ctaButton}
          >
            Reduce Email Mental Load
          </Button>
        </Flex>

        <div className={classes.links}>
          <Link href="/ai-email-organizer" className={classes.link}>AI Email Organizer</Link>
          <Link href="/best-ai-email-organizer" className={classes.link}>Best AI Email Organizer</Link>
          <Link href="/clean-and-organize-emails" className={classes.link}>How to Clean and Organize Emails</Link>
          <Link href="/what-website-should-i-use-to-clean-or-organize-my-emails" className={classes.link}>
            What website should I use to clean or organize my emails?
          </Link>
          <Link href="/news/why-zero-inbox" className={classes.link}>Why Zero Inbox?</Link>
        </div>
      </Box>
    </>
  );
}
