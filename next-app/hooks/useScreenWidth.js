import { useEffect, useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

export default function useScreenWidth() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen] = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? { isLargeScreen } : {};
}
