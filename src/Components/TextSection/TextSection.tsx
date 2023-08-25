import { createStyles, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "10rem",
    backgroundColor: "var(--landing-background)",
    fontFamily: "Helvetica Neue",
  },

  content: {
    fontSize: "48px",
    textAlign: "center",
    margin: "5rem 15%",
    fontWeight: 400,
    fontFamily: "inherit",

    [theme.fn.smallerThan("md")]: {
      fontSize: "32px",
      margin: "5rem 5%",
    },
  },

  nonVisible: {
    opacity: 0,
    transform: "translateY(5rem)",
  },

  visible: {
    opacity: 1,
    transform: "translateY(0)",
    transition: "opacity 1.1s ease-out, transform 1.3s ease-out",
  },
}));

export default function TextSection({ isVisible, innerText }: { isVisible: boolean, innerText: JSX.Element }) {
  const { classes } = useStyles();

  return (
    <Flex justify="center" align="center" className={classes.container}>
      <h2 className={`${classes.content} ${isVisible ? classes.visible : classes.nonVisible}`}>
        { innerText }
      </h2>
    </Flex>
  );
}
