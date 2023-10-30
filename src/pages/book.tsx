import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.push("/about");
    }

    return () => {
      window.open("https://payhip.com/b/qZ50g", "_blank");
    }
  }, [router.isReady]);

  return <></>;
}