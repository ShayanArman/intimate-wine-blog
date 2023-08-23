import React, { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import ZeroHeader, { HEADER_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import HeroSection from "@/Components/mainPage/HeroSection";
import TextSection from "@/Components/mainPage/TextSection";
import Section2 from "@/Components/mainPage/Section2";
import Section3 from "@/Components/mainPage/Section3";
import Section4 from "@/Components/mainPage/Section4";
import Section5 from "@/Components/mainPage/Section5";
import FooterSection from "@/Components/Footer";
import HeroSection2 from "@/Components/mainPage/HeroSection2";
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

        <HeroSection2 isSmallScreen={isSmallScreen} />

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "black"}}>
        </Box>

        <Box mih={"500px"} w={"100%"} style={{ backgroundColor: "white"}}>
        </Box>


        
        {/* <HeroSection />

        <WaypointWrapper Component={TextSection} innerText={"With Zero AI, organizing your overflowing inbox is easy! You can focus on what's important. While junk emails take seconds to manage."} />
        
        <Section2 /> 
        <Section3 /> 
        <Section4 /> 
        <Section5 /> 
        <FooterSection /> */}
      </Box>
  )
}
