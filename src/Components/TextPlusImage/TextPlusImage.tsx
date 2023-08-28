import {
  createStyles,
  Box,
  Flex,
  Text,
  Title,
  Container
} from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';

const useStyles = createStyles((theme) => ({
  container: {
    maxWidth: "1080px",
  },

  content: {
    [theme.fn.smallerThan("md")]: {
      rowGap: 30,
    }
  },

  textContainer: {
    backgroundColor: "black",
    borderRadius: "30px",
    minHeight: "20rem",
    maxWidth: "20em",
    boxShadow: "7px 7px 10px 0px var(--shadow-color)",
    width: "40%",
    [theme.fn.smallerThan("md")]: {
      width: "58%",
      maxWidth: "16em",
      padding: "2rem 1.2rem 1.2rem 1.2rem",
    }
  },

  textContent: {
    color: "white",
    padding: "2rem 1rem 0 1.5rem",
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "16em",
      padding: "2rem 1.2rem 1.2rem 1.2rem",
    }
  },

  title: {
    fontSize: "40px",
    fontWeight: 400,
    lineHeight: 1,
    [theme.fn.smallerThan("md")]: {
      fontSize: "32px",
    }
  },

  imgSection: {
    width: "50%", 
    margin: "0",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      margin: "0 auto"
    }
  },

  img: {
    backgroundColor: "black",
    [theme.fn.smallerThan("md")]: {
      backgroundColor: "orange"
    }
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

export default function TextPlusImage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const { classes } = useStyles();

  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
    <Flex w="100%" justify="center" mr="auto" ml="auto" className={classes.container}>
      <Flex 
        ref={containerRef} 
        w={"100%"} 
        justify={"space-between"}
        p="88px 24px 56px 24px" 
        wrap="wrap"
        className={classes.content}>
        <Box className={`${classes.textContainer} ${seenComponents.has("textSection") ? classes.visible : classes.nonVisible }`} style={{border: "1px solid black"}}>
          <TextPart key="textSection" />
          <Waypoint topOffset={100} onEnter={() => {!seenComponents.has("textSection") ? addSeenComponent("textSection") : null }} />
        </Box>
        <Box 
          key="imageSection"
          className={`${classes.imgSection} ${seenComponents.has("imgSection") ? classes.visible : classes.nonVisible }`}>
          <ImagePart key="imgSection" isSeen={seenComponents.has("imgSection")} />
          <Waypoint topOffset={100} onEnter={() => {!seenComponents.has("imgSection") ? addSeenComponent("imgSection") : null }} />
        </Box>
    </Flex>
    </Flex>
  );
}

function TextPart() {
  const { classes } = useStyles();

  return (
    <Flex 
      key="textSection" 
      gap={10}
      direction="column"
      className={classes.textContent}>
        <Text className={classes.title}>
          Never miss an important email
        </Text>
        <Text>
          Zero AI shows you bunches of emails. You choose what to do.
        </Text>
    </Flex>
  )
}

function ImagePart({isSeen}: {isSeen: boolean}) {
  const { classes } = useStyles();

  return (
    <Box mih={"400px"} miw={"200px"} className={classes.img}>

    </Box>
  )
}
