import BookingLink from "@/components/BookingLink";
import { createStyles, Text } from "@mantine/core";
import type { ComponentPropsWithoutRef } from "react";

const useStyles = createStyles((theme) => ({
  section: {
    marginTop: "1rem",
    marginBottom: "0.4rem",
  },

  band: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap" as const,
    gap: "0.7rem",
    width: "fit-content",
    maxWidth: "100%",
    padding: 0,
    backgroundColor: "transparent",
    color: "var(--zi-deep-blue)",
    overflowX: "visible" as const,

    [theme.fn.smallerThan("sm")]: {
      width: "100%",
      flexDirection: "column" as const,
      alignItems: "flex-start",
      gap: "0.6rem",
      overflowX: "visible" as const,
    },
  },

  item: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    minWidth: 0,
    color: "inherit",
    fontFamily: "var(--font-heading)",
    fontWeight: 400,
    fontSize: "clamp(1.1rem, 1.7vw, 1.35rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    whiteSpace: "nowrap" as const,

    [theme.fn.smallerThan("sm")]: {
      whiteSpace: "normal" as const,
      width: "100%",
    },
  },

  emoji: {
    flexShrink: 0,
    fontSize: "0.92em",
    lineHeight: 1,
  },

  divider: {
    flexShrink: 0,
    color: "rgba(15, 29, 61, 0.88)",
    fontFamily: "var(--font-heading)",
    fontWeight: 400,
    fontSize: "clamp(1rem, 1.5vw, 1.3rem)",
    lineHeight: 1,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  socialLink: {
    color: "inherit",
    textDecoration: "none",
    transition: "opacity var(--transition-fast), color var(--transition-fast)",

    "&:hover": {
      color: "var(--initimate-wine-burgundy)",
      opacity: 0.84,
    },
  },

  emailLink: {
    fontSize: "inherit",
    lineHeight: 1.1,
  },
}));

type SocialLinksProps = ComponentPropsWithoutRef<"section"> & {
  location?: string;
  instagramHandle?: string;
  instagramHref?: string;
  email?: string;
};

export default function SocialLinks({
  className,
  location = "Greve in Chianti",
  instagramHandle = "@intimate.wine",
  instagramHref = "https://www.instagram.com/intimate.wine/",
  email = "info@intimate.wine",
  ...props
}: SocialLinksProps) {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.section, className)} {...props}>
      <div className={classes.band}>
        <div className={classes.item}>
          <span className={classes.emoji} aria-hidden="true">📍</span>
          <span>{location}</span>
        </div>

        <span className={classes.divider} aria-hidden="true">|</span>

        <a
          href={instagramHref}
          target="_blank"
          rel="noreferrer"
          className={cx(classes.item, classes.socialLink)}
          aria-label={`Instagram profile for ${instagramHandle}`}
        >
          <span className={classes.emoji} aria-hidden="true">🍷</span>
          <span>{instagramHandle}</span>
        </a>

        <span className={classes.divider} aria-hidden="true">|</span>

        <div className={classes.item}>
          <span className={classes.emoji} aria-hidden="true">✉️</span>
          <BookingLink href={`mailto:${email}`} className={classes.emailLink}>
            {email}
          </BookingLink>
        </div>
      </div>
    </section>
  );
}
