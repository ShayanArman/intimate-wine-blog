import FooterSection from "@/Components/Footer";
import { useState } from "react";
import ZeroHeader, { HEADER_PIXEL_HEIGHT } from '@/Components/ZeroHeader/ZeroHeader';
import ContactForm from '@/Components/ContactForm';
  

export default function ContactUs() {

  const [scrolledToHeader, setScrolledToHeader] = useState(false);

  const onEnter = () => {
    setScrolledToHeader(false);
  };

  const onLeave = () => {
    setScrolledToHeader(true);
  };

  return (
    <>
      <ZeroHeader scrolledToHeader={scrolledToHeader} />
      <ContactForm />   
      <FooterSection />
    </>
  );
}