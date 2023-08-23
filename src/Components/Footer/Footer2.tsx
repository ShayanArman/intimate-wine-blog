import { Flex, Footer, Text } from "@mantine/core";
import Image from "next/image";

export default function Footer2() {
  return (
    <Footer height={80} withBorder={false}>
      <Flex h={"inherit"} justify="center" align="center">
        <Image width={150} height={40} alt="zero" src="/justLogo.svg" />
      </Flex>
    </Footer>
  );
}
