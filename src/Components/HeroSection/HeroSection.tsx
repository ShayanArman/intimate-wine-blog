import { useReadingStatus } from "@/hooks/useIsReading";
import { createStyles, Box, Flex, Text, Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { registerClickSignUpEventGoogle } from "../ZeroHeader/ZeroHeader";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "var(--landing-background)",
    padding: "2rem 5rem",

    [theme.fn.smallerThan("md")]: {
      padding: "2rem 1rem",
    },
  },

  main: {
    borderRadius: "30px",
    boxShadow: "7px 7px 10px 0px var(--shadow-color)",
    backgroundImage: "url(HeroBackground.svg)",
    backgroundPosition: "center",
    position: "relative",

    [theme.fn.smallerThan("sm")]: {
      backgroundImage: "url(HeroBackgroundMobile.svg)"
    }
  },

  content: {
    marginLeft: "10%",
    maxWidth: "40%",

    [theme.fn.smallerThan("xl")]: {
      maxWidth: "50%",
    },

    [theme.fn.smallerThan("md")]: {
      marginLeft: "3rem",
      maxWidth: "70%",
    },
  },

  title: {
    fontSize: "8em",
    fontWeight: 500,
    color: "black",
    fontFamily: "helvetica",
    letterSpacing: 0,
    padding: 0,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "6em",
    },
  },

  subTitle: {
    color: "black",
    fontSize: "3em",
    fontWeight: 400,
    fontFamily: "helvetica",
    lineHeight: 1.1,
    letterSpacing: 0,
    padding: "5px",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "2em",
      lineHeight: 1.2,
    },
  },

  description: {
    color: "black",
    fontWeight: 300,
  },

  learnMoreButton: {
    opacity: 0,
    fontWeight: 300,
    maxWidth: 0,
    fontSize: "1.3em",
    color: "white",
    border: "none",
    backgroundColor: "var(--zero-red)",

    "&:hover": {
      backgroundColor: "var(--zero-red-hover)",
    },
  },

  showButton: {
    opacity: 1,
    maxWidth: "15rem",
    transition: "max-width 1s ease-out, opacity 1s ease-out",
  },
}));

export default function HeroSection({
  isSmallScreen,
}: {
  isSmallScreen: boolean;
}) {
  const { classes } = useStyles();

  return (
    <Flex
      direction="column"
      justify={"center"}
      align="center"
      className={classes.container}
    >
      <Flex mih="40rem" w="100%" align="center" className={classes.main}>
        <Flex direction={"column"} className={classes.content} gap={5}>
          <h1 className={classes.title}>
            Zero <span style={{ color: "var(--zero-red)" }}>AI</span>
          </h1>
          <h1 className={classes.subTitle}>
            Email <span style={{ color: "var(--zero-blue)" }}>Manager</span>
          </h1>
          <TypeDescription isSmallScreen={isSmallScreen} />
        </Flex>
      </Flex>
    </Flex>
  );
}

const description =
  "AI-powered Email manager. Secure and simple. Save time, let Zero AI handle it.";

function TypeDescription({ isSmallScreen }: { isSmallScreen: boolean }) {
  const { classes } = useStyles();
  const showIndexRef = useRef({ charIndex: 0 });
  const { isHeroReading, setIsHeroReading } = useReadingStatus();
  const [visibleText, setVisibleText] = useState(isHeroReading ? "" : description);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const displayChar = () => {
      const { charIndex } = showIndexRef.current;

      if (charIndex < description.length) {
        const newCharacter = description[charIndex];
        setVisibleText((oldVisText) => oldVisText + newCharacter);
        showIndexRef.current = {
          ...showIndexRef.current,
          charIndex: charIndex + 1,
        };
        timeout = setTimeout(
          displayChar,
          newCharacter === "." || newCharacter === "," ? 500 : 40
        );
      } else {
        setIsHeroReading(false);
      }
    };

    if (isHeroReading) {
      displayChar();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isHeroReading]);

  return (
    <Box>
      <Text
        mih={isSmallScreen ? "6rem" : "4rem"}
        className={classes.description}
        size="xl"
        mt="xl"
      >
        {visibleText}
      </Text>
      <Button
        mt={"xl"}
        component="a"
        href={"https://app.zeroinbox.ai"}
        size={isSmallScreen ? "lg" : "xl"}
        radius="xl"
        onClick={() => { registerClickSignUpEventGoogle() }}
        className={`${classes.learnMoreButton} ${
          !isHeroReading || showIndexRef.current.charIndex > description.length - 3
            ? classes.showButton
            : ""
        }`}
      >
        Get started
      </Button>
    </Box>
  );
}
