import { createStyles, Flex, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "10rem",
    backgroundColor: "var(--landing-background)",
    fontFamily: "Helvetica Neue",
  },

  content: {
    fontSize: "2rem",
    textAlign: "center",
    margin: "5rem 20%",
    fontWeight: 400,
    fontFamily: "inherit",

    [theme.fn.smallerThan("md")]: {
      margin: "5rem 3%",
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

export default function TextSection({ isVisible, innerText }: { isVisible: boolean, innerText: string }) {
  const { classes } = useStyles();

  return (
    <Flex justify="center" align="center" className={classes.container}>
      <h2 className={`${classes.content} ${isVisible ? classes.visible : classes.nonVisible}`}>
        { innerText }
      </h2>
    </Flex>
  );
}
