import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex, } from '@mantine/core';
import { Rotate } from 'tabler-icons-react';
import React from 'react';
import { useEffect, useRef, useState } from 'react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundImage: 'linear-gradient(161.2deg, white 56%, #333 calc(56% + 2px))',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '90vh',
  },

  // img: {
  //   objectFit: 'cover',
  //   width: '100%',
  //   height: '100%',
  //   position: 'relative',
  //   zIndex: -1,
  // },
  
  hero: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: 1,
  },

  container: {
    height: '400px',
    width: '50%',
    display: 'flex-box',
    flexDirection: 'column',
    left: '10%',
    top: '12%',
    position: 'absolute',


    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
    },
  },


  title: {
    color: '#333',
    fontSize: rem(90),
    fontWeight: 300,
    lineHeight: 1.1,
    letterSpacing: 0.1,
    padding: '5px',


    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: "#333",
    maxWidth: 400,
    padding: '5px',
    fontWeight: 240,
    fontSize: rem(25),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '50%',
      fontSize: theme.fontSizes.sm,
    },
  },

  linediv: {
    position: 'absolute',
    bottom: 355,
    left: -60
  },
  
  line: {
    marginBottom: '5px',
    height: '10px',
    backgroundColor: '#e65e8c',
    width: '2000px',
    transform: 'Rotate(161.2deg)',
  },
}));

const description = "AI-powered, user-friendly, and secure. Simplify inbox management and save time with Zero Inbox.";

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
      <div className={classes.hero}>
        <Container className={classes.container}>
          <Title className={classes.title}>Clear your <span style={{ color: "var(--zero-red)"}}>inbox</span></Title>
          <Title className={classes.title}>Clear your <span style={{ color: "var(--zero-blue)"}}>mind</span></Title>
          <Text className={classes.description} size="xl" mt="xl">
            { visibleText }
          </Text>
        </Container>
        <div className={classes.linediv}>
          <div className={classes.line}></div>
        </div>
      </div>
    </div>
  );
}