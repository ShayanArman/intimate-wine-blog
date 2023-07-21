import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex } from '@mantine/core';
import { url } from 'node:inspector';
import { isAbsolute } from 'node:path';
import { relative } from 'node:path/win32';
import { title } from 'node:process';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: 'black',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  },
  

  hero: {
    top: '5%',
    width: '95%',
    position: 'absolute',
    backgroundImage: "url('./testimg-1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    border: '1px solid #333',
  },

  container: {
    height: rem(700),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },


  title1: {
    color: theme.white,
    fontSize: rem(45),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  title2: {
    
    color: theme.white,
    fontSize: rem(45),
    fontWeight: 900,
    lineHeight: 1.1,

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
    color: theme.white,
    maxWidth: 400,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export default function HeroSection() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <Container className={classes.container}>
          <Title className={classes.title1}>Clear your inbox</Title>
          <Title className={classes.title2}>Clear your mind</Title>
          <Text className={classes.description} size="xl" mt="xl">

            AI-powered, user-friendly, and secure. Simplify inbox management and save time with Zero Inbox.
          </Text>
          

          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
            Learn more
          </Button>   
        </Container>
      </div>
    </div>
  );
}