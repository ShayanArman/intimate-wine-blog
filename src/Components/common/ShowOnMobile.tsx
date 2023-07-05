import { MediaQuery } from "@mantine/core";

export function ShowOnMobile({ children }: any) {
  return (
    <MediaQuery largerThan={"md"} styles={{ display: "none" }}>
      {children}
    </MediaQuery>
  );
}
