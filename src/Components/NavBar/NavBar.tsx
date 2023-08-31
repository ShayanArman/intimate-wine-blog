import { createStyles, Box } from "@mantine/core";
import { HEADER_HEIGHT } from "../ZeroHeader/ZeroHeader";

const useStyles = createStyles(
    (theme) => ({
      container: {
          position: "fixed", 
          left: 0, 
          top: HEADER_HEIGHT, 
          zIndex: 8000, 
          backgroundColor: "var(--landing-blur)"
      }
    })
)

export default function NavBar({opened}: { opened: boolean }) {
    const { classes } = useStyles();

    if(!opened) {
        return <></>;
    }

    return (
      <Box 
        h={`100%`} 
        w={"100%"} 
        className={classes.container}>      
      </Box>
    );
}