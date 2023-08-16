import { useState } from "react";
import { Box } from '@mantine/core';
import { Waypoint } from 'react-waypoint';
import HeroSection from "@/Components/mainPage/HeroSection";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import FooterSection from "@/Components/Footer";
import TextSection from "@/Components/mainPage/Features/TextSection";
import InfoSectionLeft from "@/Components/InfoSectionLeft";
import InfoSectionRight from "@/Components/InfoSectionRight";



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
        <InfoSectionLeft />
        <InfoSectionRight /> 
        <InfoSectionLeft />
        <InfoSectionRight /> 
        <InfoSectionLeft />
        <FooterSection />
      </Box>
  )
}
