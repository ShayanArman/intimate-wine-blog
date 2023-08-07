import { useState } from "react";
import { Box, Footer } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import HeroSection from "@/Components/HeroSection";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import Features from "@/Components/Features";
import FooterSection from "@/Components/Footer";
import StartNow from "@/Components/StartNow";


export default function Home() {
  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  return (
      <Box>
        <ZeroHeader scrolledToHeader={scrolledToHeader} />
        <Waypoint
          onLeave={onLeave}
        >
          <Box mih={"60px"} w={"100%"} style={{ backgroundColor: "#333333"}}>
          </Box>
        </Waypoint>
        
        {/* EnterWaypoint  topOffset is height plus 40*/}
        <Waypoint onEnter={onEnter} topOffset={200+HEADER_PIXEL_HEIGHT-20}>
        </Waypoint>
        
        <HeroSection />
        <Features />
        <StartNow />
        <FooterSection />
      </Box>
  )
}
