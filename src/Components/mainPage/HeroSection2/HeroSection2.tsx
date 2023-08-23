import { createStyles, Box, Flex, Text, Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

const useStyles = createStyles(
    (theme) => ({
        container: {
            backgroundColor: "var(--hero-gold)",
            padding: "2rem 1.5rem",

            [theme.fn.smallerThan("md")]: {
                padding: "2rem 1rem"
            }
        },

        main: {
            borderRadius: '15px',
            backgroundImage: 'url(https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=llyVo_fvkPIAX__g-22&_nc_ht=scontent.whatsapp.net&oh=01_AdROmc4i5sXxogm-QysLB2WJcHS9VeLEZ6mP3aidKSgTgQ&oe=64E8FAE5)',
            backgroundColor: "black",
            backgroundPosition: 'center',
            position: 'relative',
        },

        title: {
            fontSize: "8em",
            fontWeight: 500,
            color: "white",
            fontFamily: "helvetica",
            letterSpacing: 0,
            padding: 0,

            [theme.fn.smallerThan('sm')]: {
                fontSize: "4em",
                lineHeight: 1.2,
              },
        },

        subTitle: {
            color: 'white',
            fontSize: "3em",
            fontWeight: 400,
            fontFamily: "helvetica",
            lineHeight: 1.1,
            letterSpacing: 0,
            padding: '5px',
        
        
            [theme.fn.smallerThan('sm')]: {
              fontSize: "2em",
              lineHeight: 1.2,
            },
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
                marginLeft: "20px",
                maxWidth: "70%",
            }
          },

          description: {
            color: "white",
            fontWeight: 300,
          },

          learnMoreButton: {
            fontWeight: 300,
            fontSize: "1.3em",
            color: 'white',
            border: "none",
            backgroundColor: "var(--zero-red)",
        
            "&:hover": {
            //   backgroundColor: "rgba(230, 94, 140, 0.8)",
                backgroundColor: "var(--zero-red)",
                opacity: 0.8
            }
          },
}));

export default function HeroSection2({isSmallScreen}: {isSmallScreen: boolean}) {
  const { classes } = useStyles();

  return (
    <Flex direction="column" justify={"center"} align="center" className={classes.container}>
        <Flex mih="40rem" w="100%" align="center" className={classes.main}>
            <Flex direction={"column"} className={classes.content} gap={5}>
                <h1 className={classes.title}>Zero <span style={{ color: "var(--zero-red)"}}>AI</span></h1>
                <h1 className={classes.subTitle}>Email <span style={{ color: "var(--zero-blue)"}}>Manager</span></h1>
                <TypeDescription isSmallScreen={isSmallScreen} />
            </Flex>
        </Flex>
    </Flex>
  );
}

const description = "AI-powered Email manager. The secure and simple way to save time on your emails.";

function TypeDescription({isSmallScreen}: {isSmallScreen: boolean}) {
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
        timeout = setTimeout(displayChar, (newCharacter === "." || newCharacter === ",") ? 500 : 40);
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
        <Text className={classes.description} size="xl" mt="xl">
        { visibleText }
        </Text>
        { !isReading && <Button mt={"xl"} size={isSmallScreen ? "lg" : "xl"} radius="lg" className={classes.learnMoreButton}>
                Get started
            </Button> 
        }
    </Box>
  );
}
