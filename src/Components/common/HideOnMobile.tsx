import { MediaQuery } from "@mantine/core";

export function HideOnMobile({ children }: any) {
  return (
    <MediaQuery smallerThan={"md"} styles={{ display: "none" }}>
      {children}
    </MediaQuery>
  );
}
