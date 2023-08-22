import { createStyles, Box, Flex, Text } from "@mantine/core";
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

        inner: {
            borderRadius: '15px',
            backgroundImage: 'url(https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=llyVo_fvkPIAX__g-22&_nc_ht=scontent.whatsapp.net&oh=01_AdROmc4i5sXxogm-QysLB2WJcHS9VeLEZ6mP3aidKSgTgQ&oe=64E8FAE5)',
            backgroundPosition: 'center',
            position: 'relative',
        },

        title: {
            fontSize: "8em",
            fontWeight: 300,
            color: "white",
            fontFamily: "helvetica",
            letterSpacing: 0,
            padding: 0,

            [theme.fn.smallerThan('sm')]: {
                fontSize: "5em",
                lineHeight: 1.2,
              },
        },

        subTitle: {
            color: 'white',
            fontSize: "3em",
            fontWeight: 300,
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

            [theme.fn.smallerThan("md")]: {
                marginLeft: "20px"
            }
          },

          description: {
            color: "white"
          }
}));

export default function HeroSection2() {
  const { classes } = useStyles();

  return (
    <Flex direction="column" justify={"center"} align="center" className={classes.container}>
        <Flex mih="40rem" w="100%" align="center" className={classes.inner}>
            <Box className={classes.content}>
                <h1 className={classes.title}>Zero <span style={{ color: "var(--zero-red)"}}>AI</span></h1>
                <h1 className={classes.subTitle}>Email <span style={{ color: "var(--zero-blue)"}}>Manager</span></h1>
                <TypeDescription />
            </Box>
        </Flex>
    </Flex>
  );
}

const description = "AI-powered Email manager. The secure and simple way to save time on your emails.";

function TypeDescription() {
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
    <Text className={classes.description} size="xl" mt="xl">
      { visibleText }
    </Text>
  );
}
