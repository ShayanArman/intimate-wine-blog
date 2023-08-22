import { useMediaQuery } from "@mantine/hooks";

export default function useIsMobile() {
  const isSmallScreen = useMediaQuery('(max-width: 500px)');
  return isSmallScreen;
}
