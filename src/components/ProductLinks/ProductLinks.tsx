import { createStyles, Text } from "@mantine/core";
import type { ComponentPropsWithoutRef } from "react";

const PRODUCT_LINKS = [
  {
    label: "Private Wine Tastings",
    href: "https://intimate.wine/private-wine-tastings-tuscany/",
  },
  {
    label: "Wine Classes",
    href: "https://intimate.wine/wine-classes-tuscany/",
  },
  {
    label: "Private Chef Dinners",
    href: "https://intimate.wine/private-chef-dinners-tuscany/",
  },
] as const;

const useStyles = createStyles((theme) => ({
  section: {
    marginTop: "3.5rem",
    paddingTop: "2rem",
    borderTop: "1px solid rgba(15, 29, 61, 0.12)",
  },

  intro: {
    marginBottom: "1.5rem",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
    color: "var(--zi-deep-blue)",
    textWrap: "balance" as const,
  },

  nav: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "0",

    [theme.fn.smallerThan("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  item: {
    position: "relative" as const,
    minWidth: 0,
    padding: "0 1.5rem",

    "&:first-of-type": {
      paddingLeft: 0,
    },

    "&:last-of-type": {
      paddingRight: 0,
    },

    "&:not(:last-of-type)::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      right: 0,
      width: 1,
      height: "2.75rem",
      backgroundColor: "rgba(15, 29, 61, 0.14)",
      transform: "translateY(-50%)",
    },

    [theme.fn.smallerThan("sm")]: {
      padding: "0 0 1rem",
      marginBottom: "1rem",

      "&:not(:last-of-type)": {
        borderBottom: "1px solid rgba(15, 29, 61, 0.1)",
      },

      "&:last-of-type": {
        marginBottom: 0,
        paddingBottom: 0,
      },

      "&:not(:last-of-type)::after": {
        display: "none",
      },
    },
  },

  link: {
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "100%",
    color: "var(--zi-deep-blue)",
    fontFamily: "var(--font-heading)",
    fontWeight: 500,
    fontSize: "clamp(1.15rem, 2vw, 1.8rem)",
    lineHeight: 1.15,
    letterSpacing: "-0.03em",
    textDecoration: "none",
    textWrap: "balance" as const,
    position: "relative" as const,
    paddingBottom: "0.22rem",
    transition: "color var(--transition-fast), transform var(--transition-fast)",

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 2,
      borderRadius: 999,
      background: "linear-gradient(90deg, rgba(255, 97, 59, 0.95) 0%, rgba(255, 97, 59, 0.55) 100%)",
      transform: "scaleX(0.18)",
      transformOrigin: "left center",
      opacity: 0.55,
      transition: "transform 180ms ease, opacity 180ms ease",
    },

    "&:hover": {
      color: "var(--initimate-wine-burgundy)",
      transform: "translateY(-1px)",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
      opacity: 1,
    },

    "&:focus-visible": {
      outline: "2px solid rgba(255, 97, 59, 0.45)",
      outlineOffset: 6,
      borderRadius: 4,
    },
  },
}));

type ProductLinksProps = ComponentPropsWithoutRef<"section"> & {
  title?: string;
};

export default function ProductLinks({
  className,
  title = "Explore Intimate Wine experiences.",
  ...props
}: ProductLinksProps) {
  const { classes, cx } = useStyles();

  return (
    <section className={cx(classes.section, className)} {...props}>
      <Text className={classes.intro}>{title}</Text>

      <nav className={classes.nav} aria-label="Intimate Wine experiences">
        {PRODUCT_LINKS.map((product) => (
          <div key={product.href} className={classes.item}>
            <a href={product.href} className={classes.link}>
              {product.label}
            </a>
          </div>
        ))}
      </nav>
    </section>
  );
}
