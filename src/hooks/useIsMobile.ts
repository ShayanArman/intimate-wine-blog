import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Check if window is defined (i.e. we're in a browser)
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    // Run check initially
    checkMobile();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile);
    }

    // Clean up after component unmounts
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkMobile);
      }
    };
  }, []);

  return isMobile;
}
