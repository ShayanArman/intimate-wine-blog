import { useState } from "react";
import { Box, Text } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import TextSection from "@/Components/TextSection";
import HeroSection from "@/Components/HeroSection";
import useIsMobile, { useIsLargeScreen } from "@/hooks/useIsMobile";
import TextPlusImage from "@/Components/TextPlusImage";


export default function Home() {
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const isSmallScreen = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
      <>
        <HeroSection isSmallScreen={isSmallScreen} />

        <TextSection 
          key="text1" 
          isVisible={seenComponents.has("text1")} 
          innerText={
          <Text>
            Overflowing inbox? <span style={{color: "var(--zero-red)"}}>Zero AI</span> can <span style={{color: "var(--zero-blue)"}}>organize</span> it in 30 seconds! - no matter the size. Bye annoying emails. <span style={{color: "var(--zero-red)"}}>Zero AI</span> can do that.
          </Text>
        }/>
        <Waypoint topOffset={800} onEnter={() => {!seenComponents.has("text1") ? addSeenComponent("text1") : null }} />

        <TextPlusImage
          title={"Never miss an important email"}
          description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
          version={"reg"}
          isSmallScreen={isSmallScreen}
          link={{text: "Features", href:"/features"}}
          placement="text-first"
        />

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: 'black' }} pt={30}>
          <TextPlusImage
            title={"Unsubscribe is here."}
            description={"Unsubscribe seamlessly. With the press of a button. Try it below."}
            version="black"
            isSmallScreen={isSmallScreen}
            link={{text: "Unsubscribe", href:"https://app.zeroinbox.ai"}}
            placement={isLargeScreen ? "image-first" : "text-first"}
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={30}>
          <TextPlusImage
            title={"Never miss an important email"}
            description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Features", href:"/features"}}
            placement="text-first"
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={150}>
          <TextPlusImage
            title={"Never miss an important email"}
            description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Features", href:"/features"}}
            placement={isLargeScreen ? "image-first" : "text-first"}
          />
        </Box>

        <Box mih={"500px"} w={"100%"} pt={150}>
          <TextPlusImage
            title={"Never miss an important email"}
            description={"Zero AI quickly sorts what you don't need. Only important emails are left."}
            version={"reg"}
            isSmallScreen={isSmallScreen}
            link={{text: "Features", href:"/features"}}
            placement="text-first"
          />
        </Box>
      </>
  )
}
