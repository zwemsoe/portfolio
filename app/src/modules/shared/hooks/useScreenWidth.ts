import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function useScreenWidth() {
  const [mounted, setMounted] = useState(false);
  const [isLargeScreen] = useMediaQuery('(min-width: 1050px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? { isLargeScreen } : {};
}
