import { createStyles, Overlay, Container, Title, Button, Text, rem, Flex, MantineSize } from '@mantine/core';
import Link from "next/link";
import Image from 'next/image';
import { ClassNames } from '@emotion/react';


const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: '#333',
    width: '100%',
    height: '350px',
    textAlign: 'center',
  },

  container: {
    width: "80%",
    height: "100%"
  },

  divider: {
    width: '100%',
    height: '1px',
    backgroundColor: 'grey',
    marginBottom: '45px',
  },

  title: {
    color: 'white',
    fontSize: rem(34),
    paddingTop: '20px',
    fontWeight: 400,
  },

  you: {
    color: '#e65e8c'
  },

  description: {
    color: 'white',
    paddingBottom: '35px',
    fontWeight: 225,
  },

}));

function ActionButton({
    buttonSize,
    innerText,
  }: {
    buttonSize: MantineSize;
    innerText: string;
  }) {
    return (
      <Button
        component="a"
        target="_blank"
        href="https://app.zeroinbox.ai"
        radius="lg"
        size={buttonSize}
        variant='outline'
        styles={(theme) => ({
          root: {
            
            border: "2px solid #E65E8C",
            color:"white",
            transition: "0.3s ease-in",
            fontSize: theme.fontSizes.md,
            fontWeight: 300,
          "&:hover": {
            transition: "0.3s ease-out",
            backgroundColor: "#E65E8C",
            color: 'white',
          }
        }
        })}
      >
        {innerText}
      </Button>
    );
  }

  function Logo() {
    return (
      <Link href="/">
        <Image width={40} height={50} alt="zeroInbox" src="/logo.ico" />
      </Link>
    );
  }
  
export default function StartNow() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
        <Container className={classes.container}>
            <div className={classes.divider}></div>
            <Logo />
            <Title fw={250} className={classes.title}>It's time for <span className={classes.you}>you</span> to start organizing your inbox.</Title>
            <Text className={classes.description} size="xl" mt="xl">
                Your mind will thank you
            </Text>
            <ActionButton buttonSize={"md"} innerText="Sign Up" /> 
        </Container>
    </div>
    
  );
}