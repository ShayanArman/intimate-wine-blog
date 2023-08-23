import React, { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import ZeroHeader, { HEADER_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import TextSection from "@/Components/mainPage/TextSection";
import HeroSection from "@/Components/mainPage/HeroSection";
import Footer from "@/Components/Footer";
import useIsMobile from "@/hooks/useIsMobile";

/**
 * Fires when the element passed in is fully in Window.
 * @param
 * @returns 
 */
function WaypointWrapper({ Component, innerText }: {Component: typeof TextSection, innerText: string }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Component isActive={isVisible} innerText={innerText} />
      <Waypoint
        topOffset={800}
        onEnter={() => {
          setIsVisible(true);
        }} />
    </>
  );
}

export default function Home() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);
  const isSmallScreen = useIsMobile();

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

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "black"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        {/* <WaypointWrapper Component={TextSection} innerText={"With Zero AI, organizing your overflowing inbox is easy! You can focus on what's important. While junk emails take seconds to manage."} /> */}

        <Footer />
      </Box>
  )
}
