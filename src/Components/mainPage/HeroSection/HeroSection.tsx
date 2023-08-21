import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex, } from '@mantine/core';
import { Rotate } from 'tabler-icons-react';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#fffef6',
    paddingTop: '60px'
  },
  
  container: {
    width: '95%',
    height: '95%',
    borderRadius: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    backgroundImage: 'url(https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=llyVo_fvkPIAX__g-22&_nc_ht=scontent.whatsapp.net&oh=01_AdROmc4i5sXxogm-QysLB2WJcHS9VeLEZ6mP3aidKSgTgQ&oe=64E8FAE5)',
    backgroundPosition: 'center',
    position: 'relative',
  },

  herodiv: {
    height: '400px',
    width: '50%',
    display: 'flex-box',
    flexDirection: 'column',
    left: '10%',
    top: '12%',
    position: 'absolute',
  },


  title: {
    color: '#333',
    fontSize: rem(90),
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: 0.1,
    padding: '5px',


    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(80),
      lineHeight: 1.2,
    },
  },

  subTitle: {
    color: '#333',
    fontSize: rem(50),
    fontWeight: 100,
    lineHeight: 1.1,
    letterSpacing: 0.1,
    padding: '5px',


    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },
  },

  description: {
    color: "white",
    maxWidth: 400,
    padding: '5px',
    fontWeight: 240,
    fontSize: rem(25),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(20),
    },
  },

  button: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex-box',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 300,
    color: 'white',
    border: "none",
    backgroundColor: "var(--zero-red)",

    "&:hover": {
      backgroundColor: "rgba(230, 94, 140, 0.8)",
    },

    [theme.fn.smallerThan('sm')]: {
      width: '25%',
    },
  },
}));

const description = "AI-powered Email manager. The secure and simple way to save time on your emails.";

export default function HeroSection() {
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
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Container className={classes.herodiv}>
          <Title className={classes.title}>Zero <span style={{ color: "var(--zero-red)"}}>AI</span></Title>
          <Title className={classes.subTitle}>Email <span style={{ color: "var(--zero-blue)"}}>Manager</span></Title>
          <Text className={classes.description} size="xl" mt="xl">
            { visibleText }
          </Text>
          { !isReading && <Button size="xl" radius="lg" className={classes.button}>
            Learn more
          </Button> }
        </Container>
      </div>
    </div>
  );
}