import { createStyles, Container, Title, Button, Text, rem } from '@mantine/core';
import { useRef, useEffect, useState } from 'react';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundImage: 'linear-gradient(161.2deg, #e8e8e8 60%, #333 calc(60% + 2px))',
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
    top: '15%',
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

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex-box',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 300,
    color: 'white',
    border: "none",
    transition: "0.3s ease",
    backgroundColor: '#E65E8C',

    "&:hover": {
      backgroundColor: "#333",
      transition: "0.3s ease",
    },

    [theme.fn.smallerThan('sm')]: {
      width: '25%',
    },
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
        timeout = setTimeout(displayChar, (newCharacter === "." || newCharacter === ",") ? 500 :  50);
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
      {/* <img className={classes.img} src='testimg-2.jpg'/> */}
        <Container className={classes.container}>
          <Title className={classes.title}>Clear your inbox</Title>
          <Title className={classes.title}>Clear your mind</Title>
          <Text className={classes.description} size="xl" mt="xl">
            { visibleText }
          </Text>
          { !isReading && 
            <Button variant="outline" size="xl" radius="lg" className={classes.control}>
              Learn more
            </Button>   
          }
        </Container>
      </div>
    </div>
  );
}