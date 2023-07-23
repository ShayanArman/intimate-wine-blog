import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex, } from '@mantine/core';
// import { url } from 'node:inspector';
// import { isAbsolute } from 'node:path';
// import { relative } from 'node:path/win32';
// import { title } from 'node:process';

const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: '#333333',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },
  

  hero: {
    width: '95%',
    height: '92%',
    position: 'relative',
    backgroundImage: "url('./testimg-1.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    border: '1px solid #333',
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
    color: theme.white,
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
    color: "white",
    maxWidth: 400,
    padding: '5px',
    fontWeight: 200,
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
    color: 'pink',
    borderColor: 'pink',
    transition: "0.3s ease",

    "&:hover": {
      backgroundColor: "#e0e0e050",
      transition: "0.3s ease",
    },

    [theme.fn.smallerThan('sm')]: {
      width: '25%',
    },
  },
}));

export default function HeroSection() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.hero}>
        <Container className={classes.container}>
          <Title className={classes.title}>Clear your inbox</Title>
          <Title className={classes.title}>Clear your mind</Title>
          <Text className={classes.description} size="xl" mt="xl">
            AI-powered, user-friendly, and secure. Simplify inbox management and save time with Zero Inbox.
          </Text>
          <Button variant="outline" size="xl" radius="lg" className={classes.control}>
            Learn more
          </Button>   
        </Container>
      </div>
    </div>
  );
}