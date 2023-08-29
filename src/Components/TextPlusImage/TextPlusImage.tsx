import {
  createStyles,
  Box,
  Flex,
  Text,
  Space,
  Group,
} from '@mantine/core';
import { BsArrowRightCircle } from "react-icons/bs";
import Link from 'next/link';
import React, { useState } from 'react';
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
    }
  },

  textContent: {
    color: "white",
    padding: "2rem 1rem 0 1.5rem",
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    gap: "20px",
    [theme.fn.smallerThan("md")]: {
      gap: "15px",
      padding: "1.2rem 1.2rem 1.2rem 1.2rem",
    }
  },

  textLink: {
    "&:hover": {
      color: "var(--zero-blue)"
    }
  },

  title: {
    fontSize: "50px",
    fontWeight: 400,
    lineHeight: 1,
    [theme.fn.smallerThan("md")]: {
      fontSize: "40px",
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

export default function TextPlusImage({title, description}: {title: string, description: string}) {
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const { classes } = useStyles();

  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
    <Flex w="100%" justify="center" mr="auto" ml="auto" className={classes.container}>
      <Flex
        w={"100%"} 
        justify={"space-between"}
        p="88px 24px 56px 24px" 
        wrap="wrap"
        className={classes.content}>
        <Box className={`${classes.textContainer} ${seenComponents.has("textSection") ? classes.visible : classes.nonVisible }`}>
          <TextPart key="textSection" title={title} description={description} />
          <Waypoint topOffset={0} onEnter={() => {!seenComponents.has("textSection") ? addSeenComponent("textSection") : null }} />
        </Box>
        <Flex 
          style={{border: "1px solid black"}}
          direction="column"
          key="imageSection"
          align="center"
          className={`${classes.imgSection} ${seenComponents.has("imgSection") ? classes.visible : classes.nonVisible }`}>
          <ImagePart key="imgSection" />
          <Waypoint scrollableAncestor={"window"} topOffset={0} onEnter={() => {!seenComponents.has("imgSection") ? addSeenComponent("imgSection") : null }} />
        </Flex>
    </Flex>
    </Flex>
  );
}

function TextPart({title, description}: {title: string, description: string}) {
  const { classes } = useStyles();

  return (
    <Flex
      direction="column"
      className={classes.textContent}>
        <Text className={classes.title}>
          { title }
        </Text>
        <Text>
          { description }
        </Text>
        <Link href="/features" style={{marginTop: "5px"}}>
          <Flex gap={5} className={classes.textLink}>
            <Text style={{borderBottom: "1px solid var(--zero-blue)"}}>Features</Text>
            <Flex align="center">
              <BsArrowRightCircle size="13px" />
            </Flex>
          </Flex>
        </Link>
    </Flex>
  )
}

function ImagePart() {
  const { classes } = useStyles();

  return (
    <Box mih={"400px"} w={"200px"} className={classes.img}>
    </Box>
  )
}
