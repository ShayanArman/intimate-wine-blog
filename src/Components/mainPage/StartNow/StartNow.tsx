import { createStyles, Title, Button, Text, rem, MantineSize } from '@mantine/core';
import Link from "next/link";
import Image from 'next/image';


const useStyles = createStyles((theme) => ({

  wrapper: {
    backgroundColor: '#333',
    width: '100%',
    height: '550px',
    padding: '70px',
  },

  container: {
    width: "80%",
    height: "400px",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto'
  },

  contentdiv: {
    // marginTop: '100px',
    width: '100%'
  },

  title: {
    color: 'white',
    paddingTop: '20px',
    fontWeight: 400,
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
            fontWeight: 225,
            fontSize: rem(18),
            width: '150px',
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
        <div className={classes.container}>
          <div className={classes.contentdiv}>
            <Logo />
            <Title fw={250} fz={rem(40)} className={classes.title}>
              It&apos;s time for <span style={{color: "var(--zero-red)"}}>AI Email</span>. It&apos;s time for <span style={{ color: "var(--zero-blue)" }}> Zero Inbox</span>.
            </Title>
            <Text className={classes.description} fz={rem(25)} fw={225} mt="xl">
                Your mind will thank you
            </Text>
            <ActionButton buttonSize={"lg"} innerText="Sign Up" /> 
            </div>
        </div>
    </div>
    
  );
}