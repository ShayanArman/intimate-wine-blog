import { createStyles, Flex, Button, NavLink } from "@mantine/core";
import { HEADER_HEIGHT, headerLinks } from "../ZeroHeader/ZeroHeader";
import { FcEnteringHeavenAlive } from "react-icons/fc";

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
        width: "80%",
        [theme.fn.largerThan("sm")]: {
          width: "100%",
        }
      }
    })
)

export default function NavBar({opened, setOpened}: { opened: boolean, setOpened: () => void }) {
    const { classes } = useStyles();

    if(!opened) {
        return <></>;
    }

    return (
      <Flex justify="center" className={`${classes.container}`}>
        <Flex 
          direction="column"
          className={classes.content}>
            <NavLink label="Features" variant="filled" icon={<FcEnteringHeavenAlive />} />
            { headerLinks.map((link) => (
              <Button key={link.label} onClick={() => { setOpened() } }>{ link.label }</Button>
            )) 
            }
        </Flex>
      </Flex>
    );
}