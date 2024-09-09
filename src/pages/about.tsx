import { createStyles, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "3rem 0rem",
  },

  section: {
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
      <Flex direction="column" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          The Future of Email
        </h1>
        <p className={classes.description}>
          The goal of ZeroInbox.ai is to redesign Email. Information overload, caused by too many emails, has become unmanageable.
          But it doesn&apos;t have to be this way. Using AI, we can organize our emails as they come in.
          Learning from user behavior, email can become creative and fun rather than a chore.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Team
        </h1>
        <p className={classes.description}>
          Our team is led by <span><PeopleLink link="https://www.linkedin.com/in/eshabhatti/" content="Esha Bhatti" /></span>, a Google Women Techmaker and uWaterloo alum. Our CTO is <span><PeopleLink link="https://www.linkedin.com/in/shayan-arman-005006280/" content="Shayan Arman" /></span>, a Silicon Valley Engineer formerly at Apple. And <span><PeopleLink link="https://www.linkedin.com/in/connor-tp-robertson/" content="Connor Robertson" /></span>, a Senior Software Architect with a degree from the University of British Columbia. Both Esha and Shayan live in beautiful Vancouver British Columbia, Canada.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Advisory
        </h1>
        <p className={classes.description}>
          We are advised by <span><PeopleLink link="https://www.linkedin.com/in/catherinedahl/" content="Catherine Dahl" /></span>. Founder of Beanworks - sold for over $100M.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h1 className={classes.title}>
          Join Us
        </h1>
        <p className={classes.description}>
          We are currently recruiting Engineers both in AI and Software Engineering. Drop us a line with your CV <span><PeopleLink link="mailto:jobs@zeroinbox.ai?subject=Roles - Zero Inbox: AI Email Manager" content="here" /></span>.
        </p>
      </Flex>
    </Flex>
  );
}

function PeopleLink({link, content}: {link: string, content: string}) {
  return (
    <a style={{textDecoration: "underline"}} href={link} target="_blank">
      { content }
    </a>
  )
}