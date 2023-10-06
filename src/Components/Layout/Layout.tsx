import useIsMobile from "@/hooks/useIsMobile";
import { createStyles, Box, Flex } from "@mantine/core";
import Head from "next/head";
import FooterSection from "@/Components/Footer";
import { useEffect, useState } from "react";
import ZeroHeader, { HEADER_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";
import { Waypoint } from "react-waypoint";

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
        <title>Zero Inbox</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="Clear your Email, clear your Mind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content={"Zero AI"} />
      </Head>
      
      <Flex id="#top" direction="column" mih="100vh" className={classes.container}>
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
