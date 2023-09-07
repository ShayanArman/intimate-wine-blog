import {
  createStyles,
  Box,
  Flex,
  Text,
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

  textBorder: {
    // borderRadius: "30px",
    // boxShadow: "7px 7px 10px 0px var(--shadow-color)",
  },

  textContainer: {
    backgroundColor: "transparent",
    minHeight: "20rem",
    maxWidth: "23rem",
    
    [theme.fn.smallerThan("lg")]: {
      maxWidth: "23rem"
    },

    [theme.fn.smallerThan("md")]: {
      maxWidth: "50%"
    },

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%"
    },
  },

  textContent: {
    textAlign: "left",
    fontFamily: "Helvetica Neue",
    gap: "20px",
    padding: "2rem 1rem 0 1.5rem",
    [theme.fn.smallerThan("md")]: {
      gap: "15px",
      padding: "1.2rem 1.2rem 2rem 1.2rem",
    }
  },

  title: {
    fontSize: "60px",
    fontWeight: 400,
    lineHeight: 1,
    [theme.fn.smallerThan("md")]: {
      maxWidth: "70%",
      fontSize: "35px",
    }
  },

  textLink: {
    "&:hover": {
      color: "var(--zero-blue)"
    }
  },

  reg: {
    color: "black"
  },

  black: {
    color: "white"
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

type Link = {
  text: string,
  href: string
}

export default function TextPlusImage({title, description, isSmallScreen, version, link, placement}: {title: string, description: string, isSmallScreen: boolean, version: "reg" | "black", link: Link, placement: "text-first" | "image-first" }) {
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const { classes } = useStyles();

  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  const image = (
    <Flex 
      direction="column"
      key="imageSection"
      align="center"
      className={`${classes.imgSection} ${seenComponents.has("imgSection") ? classes.visible : classes.nonVisible }`}>
      <ImagePart key="imgSection" />
      <Waypoint topOffset={!isSmallScreen ? 1200 : 0} onEnter={() => {!seenComponents.has("imgSection") ? addSeenComponent("imgSection") : null }} />
    </Flex>);

  const text = (
    <Box className={`${classes.textContainer} ${seenComponents.has("textSection") ? classes.visible : classes.nonVisible }`}>
      <TextPart key="textSection" title={title} description={description} version={version} link={link} />
      <Waypoint topOffset={0} onEnter={() => {!seenComponents.has("textSection") ? addSeenComponent("textSection") : null }} />
    </Box>
  );

  return (
    <Flex w="100%" justify="center" mr="auto" ml="auto" className={classes.container}>
      <Flex
        w={"100%"} 
        justify={"space-between"}
        p="0px 24px 56px 24px" 
        wrap="wrap"
        className={classes.content}>
          { placement === "text-first" ?
          <>
            {text}
            {image}
          </> : 
          <>
            {image}
            {text}
          </>
        }
    </Flex>
    </Flex>
  );
}

function TextPart({title, description, version, link}: {title: string, description: string, version: "reg" | "black", link: Link}) {
  const { classes } = useStyles();

  return (
    <Flex
      direction="column"
      className={`${classes.textContent} ${version === "reg" ? classes.reg : classes.black}`}>
        <Text className={`${classes.title}`}>
          { title }
        </Text>
        <Text>
          { description }
        </Text>
        <Link href={link.href}>
          <Flex gap={5} className={`${classes.textLink}`}>
            <Text style={{
              borderBottom: "1px solid var(--zero-blue)"}}>{link.text}</Text>
            <Flex align="center">
              <BsArrowRightCircle size="13px"  />
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
