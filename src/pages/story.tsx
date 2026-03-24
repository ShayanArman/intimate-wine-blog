import { createStyles, Flex, Text } from "@mantine/core";
import { getPathLastModified } from "@lib/seo";
import {
  FiBookOpen,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

const useStyles = createStyles((theme) => ({
  container: {
    margin: "7rem 0rem 3rem",
  },

  section: {
    width: "50%",

    [theme.fn.smallerThan("xl")]: {
      width: "80%",
    },
  },

  meta: {
    display: "inline-flex",
    alignSelf: "flex-start",
    width: "fit-content",
    marginBottom: "0.9rem",
    padding: "0.35rem 0.75rem",
    borderRadius: 999,
    background: "rgba(15, 29, 61, 0.07)",
    color: "rgba(15, 29, 61, 0.75)",
    fontSize: "0.92rem",
    fontWeight: 700,
    letterSpacing: "0.01em",
  },

  title: {
    fontFamily: "Calibri, Arial, sans-serif",
  },

  description: {
    fontFamily: "Calibri, Arial, sans-serif",
    fontSize: "1.5rem",
    lineHeight: "2.5rem",
  },

  socialRow: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 8,
  },

  socialCircle: {
    width: 44,
    height: 44,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    border: "1px solid rgba(15, 29, 61, 0.25)",
    color: "rgba(15, 29, 61, 0.9)",
    fontFamily: "Calibri, Arial, sans-serif",
    fontWeight: 700,
    fontSize: "0.92rem",
    transition: "all 140ms ease",

    "&:hover": {
      borderColor: "var(--zero-red-darker)",
      color: "var(--zero-red-darker)",
      transform: "translateY(-1px)",
    },
  },
}));

const shayanLinks: { icon: JSX.Element; href: string; title: string }[] = [
  { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/shayan-arman/", title: "LinkedIn" },
  { icon: <FiTwitter size={18} />, href: "https://x.com/InboxZero", title: "X" },
  { icon: <FiGithub size={18} />, href: "https://github.com/ShayanArman", title: "GitHub" },
  { icon: <FiYoutube size={18} />, href: "https://www.youtube.com/@quantumrysics", title: "YouTube" },
  { icon: <FiInstagram size={18} />, href: "https://www.instagram.com/_shayanarman/", title: "Instagram" },
  { icon: <FiBookOpen size={18} />, href: "https://shayanarman.substack.com/", title: "Substack" },
];

function formatPublishedDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function Story() {
  const { classes } = useStyles();
  const publishedDate = formatPublishedDate(getPathLastModified("/story") ?? "2026-02-27T10:50:24-08:00");

  return (
    <Flex direction="column" align={"center"} className={classes.container} gap={30}>
      <Flex direction="column" className={classes.section} gap={10}>
        <Text className={classes.meta}>Published {publishedDate}</Text>
        <h1 className={classes.title}>
          The Story Behind Zero Inbox
        </h1>
        <p className={classes.description}>
          After leaving Siri at Apple, Shayan Arman started zeroinbox.ai with one core realization: email is still one of the
          biggest parts of our day, but there was no true AI-first designed Email solution focused on organization, cleanup, and
          user control. The vision was clear: build an AI Email Organizer and AI Email Cleaner that helps real people reach inbox
          zero with confidence.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          Why We Started
        </h2>
        <p className={classes.description}>
          We saw the same problem everywhere: too many emails, too much noise, not enough signal. Most tools made inbox work
          faster, but did not redesign the workflow from an AI-first perspective. Zero Inbox was built to rethink how Email should
          work, so cleanup and organization happen in minutes instead of becoming a daily burden. That is why we call it an AI
          Email Organizer and AI Email Cleaner, not just another inbox tool.
        </p>
      </Flex>

      <Flex direction="column" className={classes.section} gap={10}>
        <h2 className={classes.title}>
          Founder
        </h2>
        <p className={classes.description}>
          Shayan finished Waterloo Computer Engineering, worked at Apple on Siri from 2017 to 2021, and then started Zero Inbox
          to help the world manage email with AI first. Learn more at{" "}
          <PeopleLink link="https://shayanarman.com/" content="shayanarman.com" />
          {" "}and see all links at{" "}
          <PeopleLink link="https://shayanarman.com/links" content="shayanarman.com/links" />.
        </p>
        <div className={classes.socialRow}>
          {shayanLinks.map((item) => (
            <a
              key={item.title}
              className={classes.socialCircle}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              title={item.title}
              aria-label={item.title}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Flex>
    </Flex>
  );
}

function PeopleLink({ link, content }: { link: string; content: string }) {
  return (
    <a style={{ textDecoration: "underline" }} href={link} target="_blank" rel="noreferrer noopener">
      {content}
    </a>
  );
}
