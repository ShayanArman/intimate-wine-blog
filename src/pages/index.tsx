import { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import HeroSection from "@/Components/mainPage/HeroSection";
import TextSection from "@/Components/mainPage/TextSection";
import Section1 from "@/Components/mainPage/Section1";
import Section2 from "@/Components/mainPage/Section2";
import Section3 from "@/Components/mainPage/Section3";
import Section4 from "@/Components/mainPage/Section4";
import Section5 from "@/Components/mainPage/Section5";
import FooterSection from "@/Components/Footer";



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
          onEnter={onEnter}
          onLeave={onLeave}
        >
          <Box mih={"60px"} w={"100%"} style={{ backgroundColor: "white"}}>
          </Box>
        </Waypoint>
        
        { /* EnterWaypoint  topOffset is height plus 40 */ }
        <Waypoint topOffset={200+60+HEADER_PIXEL_HEIGHT-20}>
        </Waypoint>
        
        <HeroSection />
        <TextSection />
        <Section1 />
        <Section2 /> 
        <Section3 /> 
        <Section4 /> 
        <Section5 /> 
        <FooterSection />
      </Box>
  )
}
