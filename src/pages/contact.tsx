import ZeroHeader from "@/Components/ZeroHeader";
import { HEADER_PIXEL_HEIGHT } from "@/Components/ZeroHeader/ZeroHeader";
import { createStyles, Box, Overlay, Container, Title, Button, Text, rem, Flex, } from '@mantine/core';
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import FooterSection from "@/Components/Footer";

const useStyles = createStyles((theme) => ({

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
    width: '75%',
    display: 'flex',
    flexDirection: 'column',
  },

  title: {
    fontWeight: 300,
    fontSize: rem(45),
  },

})
)

export default function Contact() {
  const { classes } = useStyles();

  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };
  return (
    <>
    <Box>
      <ZeroHeader scrolledToHeader={scrolledToHeader} />
      <Waypoint onLeave={onLeave}>
        <Box mih={"60px"} w={"100%"} style={{ backgroundColor: "#333333" }}></Box>
      </Waypoint>

      {/* EnterWaypoint  topOffset is height plus 40*/}
      <Waypoint onEnter={onEnter} topOffset={200 + HEADER_PIXEL_HEIGHT - 20}>
      </Waypoint>
    </Box>
    <div className={classes.wrapper}>
      <Container className={classes.container}>
        <Title className={classes.title}>Big time contact page</Title>
      </Container>
    </div>
    <FooterSection />
    </>

  );
}
