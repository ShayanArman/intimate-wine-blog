import { createStyles, Box, Flex, Text, Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: "var(--hero-gold)",
    padding: "2rem 5rem",

    [theme.fn.smallerThan("md")]: {
      padding: "2rem 1rem",
    },
  },

  main: {
    borderRadius: "30px",
    boxShadow: "7px 7px 10px 0px var(--shadow-color)",
    backgroundColor: "black",
    backgroundPosition: "center",
    position: "relative",
  },

  content: {
    marginLeft: "120px",
    maxWidth: "33%",

    [theme.fn.smallerThan("xl")]: {
      maxWidth: "45%",
    },

    [theme.fn.smallerThan("lg")]: {
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
    color: "white",
    fontFamily: "helvetica",
    letterSpacing: 0,
    padding: 0,

    [theme.fn.smallerThan("sm")]: {
      fontSize: "4em",
      lineHeight: 1.2,
    },
  },

  subTitle: {
    color: "white",
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
    color: "white",
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
      backgroundColor: "var(--zero-red)",
      opacity: 0.8,
    },
  },

  showButton: {
    opacity: 1,
    maxWidth: "15rem",
    transition: "all 1s ease-out",
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
  const [isReading, setIsReading] = useState(true);
  const [visibleText, setVisibleText] = useState("");
  const showIndexRef = useRef({ charIndex: 0 });

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
        setIsReading(false);
      }
    };

    if (isReading) {
      displayChar();
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isReading]);

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
        size={isSmallScreen ? "lg" : "xl"}
        radius="xl"
        className={`${classes.learnMoreButton} ${
          !isReading || showIndexRef.current.charIndex > description.length - 3
            ? classes.showButton
            : ""
        }`}
      >
        Get started
      </Button>
    </Box>
  );
}
