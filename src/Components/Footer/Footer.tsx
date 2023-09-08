import { Flex, Footer } from "@mantine/core";
import Image from "next/image";


export default function FooterSection() {
  return (
    <Footer height={80} style={{backgroundColor: "var(--landing-background)"}} withBorder={false}>
      <Flex h={"inherit"} justify="center" align="center" style={{backgroundColor: "transparent"}}>
        <Image width={150} height={40} alt="zero" src="/justLogo.svg" />
      </Flex>
    </Footer>
  );
}
