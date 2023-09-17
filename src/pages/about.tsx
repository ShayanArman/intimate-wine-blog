import { createStyles, Flex, Title, Text, Space } from "@mantine/core";


const useStyles = createStyles((theme) => ({
  '@font-face': {
    fontFamily: 'Calibri',
    src: `
      url('/fonts/calibri-regular.ttf') format('truetype'),
      url('/fonts/calibri-italic.ttf') format('truetype'),
      url('/fonts/calibri-bold.ttf') format('truetype')
      url('/fonts/calibri-bold-italic.ttf') format('truetype')
    `,
  },

  container: {
    margin: "3rem 0rem",
  },

  hero: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%"
    }
  },

  title: {
    fontFamily: "Calibri, Arial, sans-serif"
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.5rem",
    lineHeight: "2.5rem"
  }
}));

export default function About() {
  const { classes } = useStyles();

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Flex direction="column" className={classes.hero} gap={10}>
        <h1 className={classes.title}>
          The Future of Email
        </h1>
        <p className={classes.description}>
          The goal of ZeroInbox.ai is to simplify Email. Information overload, caused by too many emails, has become unmanageable.
          But it doesn&apos;t have to be this way. Using AI, we can organize our emails as they come in.
          Learning from user behavior, email can become creative and fun rather than a chore.
        </p>
      </Flex>

      <Flex direction="column" className={classes.hero} gap={10}>
        <h1 className={classes.title}>
          Team
        </h1>
        <p className={classes.description}>
          Our team is led by Shayan Arman, a Silicon Valley Engineer formerly at Apple.
        </p>
      </Flex>

      <Flex direction="column" className={classes.hero} gap={10}>
        <h1 className={classes.title}>
          Advisory
        </h1>
        <p className={classes.description}>
          We are advised by Bill York. Currently the head of Siri Communications.
        </p>
      </Flex>

      <Flex direction="column" className={classes.hero} gap={10}>
        <h1 className={classes.title}>
          Join Us
        </h1>
        <p className={classes.description}>
          We are currently recruiting Engineers both in AI and Software Engineering. Drop us a line with your CV <span><a style={{textDecoration: "underline"}} href="mailto:jobs@zeroinbox.ai?subject=Roles - Zero Inbox: AI Email Manager">here</a></span>.
        </p>
      </Flex>
    </Flex>
  );
}