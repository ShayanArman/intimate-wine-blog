import { createStyles, Flex, Button } from "@mantine/core";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";

const useStyles = createStyles(
    (theme) => ({
      container: {
        position: "fixed",
        top: HEADER_HEIGHT, 
        left: 0,
        zIndex: 8000, 
        backgroundColor: "var(--landing-blur)",
        padding: "20px",

        [theme.fn.largerThan("sm")]: {
          marginLeft: "10px",
          width: "20rem",
          height: "initial",
          backgroundColor: "var(--landing-blur)",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        },

        [theme.fn.smallerThan("sm")]: {
          width: "100%",
          height: "100%"
        }
      },

      content: {
        rowGap: 5,
        width: "100%",
      }
    })
)

export default function NavBar({opened, isSmallScreen, setOpened}: { opened: boolean, isSmallScreen: boolean, setOpened: () => void }) {
    const { classes } = useStyles();

    if(!opened) {
        return <></>;
    }

    return (
      <Flex className={`${classes.container}`}>
        <Flex 
          direction="column"
          className={classes.content}>
            { headerLinks.map((link) => (
              <Button key={link.label} onClick={() => { setOpened() } }>{ link.label }</Button>
            )) 
            }
        </Flex>
      </Flex>
    );
}