import { createStyles, Flex, rem } from "@mantine/core";
import Link from "next/link";
import { headerLinks } from "../ZeroHeader/ZeroHeader";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

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

  mobileDropdownTrigger: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
  },

  mobileDropdownChevron: {
    flexShrink: 0,
    transition: "transform var(--transition-fast)",
  },

  mobileDropdownContent: {
    paddingBottom: rem(8),
  },

  mobileDropdownLink: {
    display: "block",
    padding: `${rem(10)} 0 ${rem(10)} ${rem(18)}`,
    color: "var(--initimate-wine-burgundy)",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    fontSize: rem(14),
    textDecoration: "none",
    textTransform: "none",
    letterSpacing: "0.02em",
    transition: "color var(--transition-fast)",

    "&:hover": {
      color: "var(--initimate-wine-text)",
    },
  },
}));

export default function NavBar({ opened, closeNavBar }: { opened: boolean; closeNavBar: () => void }) {
  const { classes } = useStyles();
  const router = useRouter();
  const [servicesOpened, setServicesOpened] = useState(false);

  if (!opened) {
    return <></>;
  }

  return (
    <Flex className={classes.container}>
      <Flex direction="column" className={classes.content}>
        {headerLinks.map((link) => {
          if (link.children?.length) {
            return (
              <div key={link.label}>
                <button
                  type="button"
                  className={`${classes.link} ${classes.mobileDropdownTrigger}`}
                  aria-expanded={servicesOpened}
                  onClick={() => setServicesOpened((prev) => !prev)}
                >
                  {link.label}
                  <FiChevronDown
                    size={16}
                    className={classes.mobileDropdownChevron}
                    style={{ transform: servicesOpened ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                {servicesOpened ? (
                  <div className={classes.mobileDropdownContent}>
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        shallow={true}
                        href={child.link ?? "/"}
                        target={child.newTab ? "_blank" : "_self"}
                        className={classes.mobileDropdownLink}
                        onClick={() => closeNavBar()}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          }

          return (
            <Link
              key={link.label}
              shallow={true}
              href={link.link ?? "/"}
              target={link.newTab ? "_blank" : "_self"}
              className={`${classes.link} ${router.asPath === link.link ? classes.activeLink : ""}`}
              onClick={() => closeNavBar()}
            >
              {link.label}
            </Link>
          );
        })}

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
