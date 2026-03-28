import { createStyles } from "@mantine/core";
import type { ComponentPropsWithoutRef } from "react";

const useStyles = createStyles(() => ({
  bookingLink: {
    color: "var(--zero-orange)",
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "0.12em",
    transition: "opacity var(--transition-fast)",

    "&:hover": {
      opacity: 0.85,
    },
  },
}));

type BookingLinkProps = ComponentPropsWithoutRef<"a">;

export default function BookingLink({ className, ...props }: BookingLinkProps) {
  const { classes, cx } = useStyles();

  return <a {...props} className={cx(classes.bookingLink, className)} />;
}
