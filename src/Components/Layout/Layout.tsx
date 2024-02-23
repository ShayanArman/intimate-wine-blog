import useIsMobile from "@/hooks/useIsMobile";
import { createStyles, Box, Flex } from "@mantine/core";
import Head from "next/head";
import FooterSection from "@/Components/Footer";
import { useEffect, useState } from "react";
import ZeroHeader, { HEADER_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";
import { Waypoint } from "react-waypoint";
import GoogleAnalytics from "../Analytics/GoogleAnalytics";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "var(--landing-background)"
  },

  content: {
    flex: 1
  }
}));

export default function Layout({ children }: { children: JSX.Element }) {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);
  const isZeroInbox = process.env.NEXT_PUBLIC_IS_ZERO_INBOX === "true";
  const [pageReady, setPageReady] = useState(false);
  const isSmallScreen = useIsMobile();
  const { classes } = useStyles();

  useEffect(() => {
    function handleLoad() {
      setPageReady(true);
    }

    if (document.readyState === "complete" && !pageReady) {
      setPageReady(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    }
  }, [pageReady]);

  if (!pageReady) {
    return null;
  }

  return (
    <>
      <Head>
        <title>
          {`${isZeroInbox ? "Zero Inbox" : "Inbox Zero"} AI Email Organizer: Clear your Inbox, Keep your emails clean and organized with ${isZeroInbox ? "Zero Inbox" : "Inbox Zero"}.`}
        </title>
        <link rel="icon" href="/logo.ico" />
        <link rel="canonical" href={isZeroInbox ? "https://www.zeroinbox.ai" : "https://www.getinboxzero.ai"} />
        <meta name="description" content={`${isZeroInbox ? "Zero Inbox": "Inbox Zero"} AI Email Organizer helps you clear your emails efficiently. Be more productive quickly. Feel lighter, by clearing your inbox. Get to inbox zero quickly using ${isZeroInbox ? "Zero Inbox": "Inbox Zero"} AI Email Cleaner. Clear your Email with the ultimate email hack, clear your Mind.`} />
        <meta property="og:description" content="Clear your email inbox, and get to inbox zero with the ultimate email productivity tool Zero AI Email Organizer. Be more effective, use Zero AI Email Cleaner productivity tool. Stay organized and stress-free." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={`${isZeroInbox ? "Zero Inbox": "Inbox Zero"} AI Email Cleaner. The ultimate email hack. Be more productive with ${isZeroInbox ? "Zero Inbox": "Inbox Zero"} AI Email Organizer.`} />
        <meta property="og:url" content="http://www.zeroinbox.ai" />
        <meta property="og:type" content="website" />
      </Head>
      
      <Flex id="#top" direction="column" mih="100vh" className={classes.container}>
        <GoogleAnalytics />
        <ZeroHeader isSmallScreen={isSmallScreen} scrolledToHeader={scrolledToHeader} />

        <Waypoint
          onEnter={() => { setScrolledToHeader(false); }}
          onLeave={() => { setScrolledToHeader(true);}}
        >
          <Box mih={HEADER_HEIGHT} w={"100%"} style={{ backgroundColor: "var(--landing-background)"}}>
          </Box>
        </Waypoint>

        <Box className={classes.content}>
          { children }
        </Box>

        <FooterSection />
      </Flex>
    </>
  );
}
