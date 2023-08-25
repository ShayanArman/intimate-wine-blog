import React, { useState } from "react";
import { Box, Text } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import ZeroHeader, { HEADER_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import TextSection from "@/Components/TextSection";
import HeroSection from "@/Components/HeroSection";
import Footer from "@/Components/Footer";
import useIsMobile from "@/hooks/useIsMobile";

export default function Home() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);
  const [seenComponents, setSeenComponents] = useState<Set<string>>(new Set());
  const isSmallScreen = useIsMobile();
  
  const addSeenComponent = (component: string) => {
    setSeenComponents((prevItems) => new Set(prevItems).add(component));
  };

  return (
      <Box>
        <ZeroHeader isSmallScreen={isSmallScreen} scrolledToHeader={scrolledToHeader} />

        <Waypoint
          onEnter={() => { setScrolledToHeader(false); }}
          onLeave={() => { setScrolledToHeader(true);}}
        >
          <Box mih={HEADER_HEIGHT} w={"100%"} style={{ backgroundColor: "white"}}>
          </Box>
        </Waypoint>

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

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "black"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        <Footer />
      </Box>
  )
}
