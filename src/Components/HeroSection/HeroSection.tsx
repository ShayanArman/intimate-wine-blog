import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex, } from '@mantine/core';
import { Rotate } from 'tabler-icons-react';

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

  inbox: {
    color: '#e65e8c'

  },

  mind: {
    color: '#47AFE6'
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
    bottom: 335,
    left: -60

  },
  
  line: {
    marginBottom: '5px',
    height: '1px',
    backgroundColor: '#e65e8c',
    width: '2000px',
    transform: 'Rotate(161.2deg)',
  },

  mannquote: {
    textAlign: 'center',
    width: '300px',
    color: '#444',
    position: 'absolute',
    right: 40,
    bottom: 340,
    transition: "0.3s ease-in",

    "&:hover": {
      color: '#47AFE6',
      transition: "0.3s ease-out",
    }
  },

  kondoquote: {
    textAlign: 'center',
    width: '250px',
    color: '#444',
    position: 'absolute',
    right: 590,
    bottom: 110,
    transition: "0.3s ease-in",

    "&:hover": {
      color: '#47AFE6',
      transition: "0.3s ease-out",
    }
  },

  franklinquote: {
    textAlign: 'center',
    width: '475px',
    color: '#444',
    position: 'absolute',
    right: 650,
    bottom: 0,
    transition: "0.3s ease-in",

    "&:hover": {
      color: '#e65e8c',
      transition: "0.3s ease-out",
    }
  },

  burkequote: {
    textAlign: 'center',
    width: '375px',
    color: '#444',
    position: 'absolute',
    right: 140,
    bottom: 20,
    transition: "0.3s ease-in",

    "&:hover": {
      color: '#e65e8c',
      transition: "0.3s ease-out",
    }
  },

  mardenquote: {
    textAlign: 'center',
    width: '400px',
    color: '#444',
    position: 'absolute',
    right: 130,
    bottom: 220,
    transition: "0.3s ease-in",

    "&:hover": {
      color: 'rgb(255,255,255, .7)',
      transition: "0.3s ease-out",
    }
  },

  unknownquote: {
    textAlign: 'center',
    width: '400px',
    color: '#444',
    position: 'absolute',
    right: 70,
    bottom: 120,
    transition: "0.3s ease-in",

    "&:hover": {
      color: '#47AFE6',
      transition: "0.3s ease-out",
    }
  },
}));

export default function HeroSection() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <Container className={classes.container}>
          <Title className={classes.title}>Clear your <span className={classes.inbox}>inbox</span></Title>
          <Title className={classes.title}>Clear your <span className={classes.mind}>mind</span></Title>
          <Text className={classes.description} size="xl" mt="xl">
            AI-powered, user-friendly, and secure. Simplify inbox management and save time with Zero Inbox.
          </Text>
        </Container>
        <div className={classes.linediv}>
          <div className={classes.line}></div>
          <div className={classes.line}></div> 
          <div className={classes.line}></div>
          <div className={classes.line}></div>
          <div className={classes.line}></div>
        </div>
        <Text mt="md" fw={300} size={rem(20)} className={classes.mannquote}>"Do Email less" - Merlin Mann</Text>
        <Text mt="md" fw={300} size={rem(20)} className={classes.kondoquote}>“Tidying allows you to tend to your psychological space.” — Marie Kondo</Text>
        <Text mt="md" fw={300} size={rem(20)} className={classes.franklinquote}>“For every minute spent organizing, an hour is earned.” - Benjamin Franklin</Text>
        <Text mt="md" fw={300} size={rem(20)} className={classes.burkequote}>"Good order is the foundation of all things." - Edmund Burke</Text>
        <Text mt="md" fw={300} size={rem(20)} className={classes.mardenquote}>“A good system shortens the road to the goal.” - Orison Swett Marden</Text>
        <Text mt="md" fw={300} size={rem(20)} className={classes.unknownquote}>“Organization begins with awareness of what doesn’t work for us.” - Unknown</Text>
      </div>
    </div>
  );
}