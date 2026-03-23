import { createStyles, Flex, rem } from "@mantine/core";
import Link from "next/link";
import { headerLinks } from "../ZeroHeader/ZeroHeader";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  container: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 8000,
    backgroundColor: "white",
    borderBottom: "1px solid rgba(108, 30, 32, 0.12)",
    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.08)",
    padding: `0 ${rem(16)} ${rem(16)}`,

    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },

  content: {
    rowGap: 0,
  },

  link: {
    display: "block",
    padding: `${rem(14)} 0`,
    borderTop: "1px solid rgba(108, 30, 32, 0.08)",
    color: "var(--initimate-wine-burgundy)",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    fontSize: rem(14),
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "var(--initimate-wine-text)",
    },
  },

  activeLink: {
    color: "var(--initimate-wine-text)",
  },
}));

export default function NavBar({ opened, closeNavBar }: { opened: boolean; closeNavBar: () => void }) {
  const { classes } = useStyles();
  const router = useRouter();

  if (!opened) {
    return <></>;
  }

  return (
    <Flex className={classes.container}>
      <Flex direction="column" className={classes.content}>
        {headerLinks.map((link) => (
          <Link
            key={link.label}
            shallow={true}
            href={link.link}
            target={link.newTab ? "_blank" : "_self"}
            className={`${classes.link} ${router.asPath === link.link ? classes.activeLink : ""}`}
            onClick={() => closeNavBar()}
          >
            {link.label}
          </Link>
        ))}

        <Link href="https://app.zeroinbox.ai" target="_blank" className={classes.link} onClick={() => closeNavBar()}>
          Log In
        </Link>
        <Link href="https://app.zeroinbox.ai" target="_blank" className={classes.link} onClick={() => closeNavBar()}>
          Sign Up
        </Link>
      </Flex>
    </Flex>
  );
}
