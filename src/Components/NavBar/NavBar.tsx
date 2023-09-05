import { createStyles, Flex, Button, Box } from "@mantine/core";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { useEffect, useRef } from "react";

const useStyles = createStyles(
    (theme) => ({
      container: {
        position: "fixed",
        top: HEADER_HEIGHT, 
        left: 0,
        zIndex: 8000, 
        backgroundColor: "var(--landing-blur)",
        padding: "20px",
      },

      phoneContainer: {
        width: "100%",
        height: "100%"
      },

      biggerContainer: {
        marginLeft: "10px",
        width: "20rem",
        height: "initial",
        backgroundColor: "var(--landing-blur)",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
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
      <Flex className={`${classes.container} ${isSmallScreen ? classes.phoneContainer : classes.biggerContainer}`}>
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