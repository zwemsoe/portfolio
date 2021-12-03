import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useEffect, useRef } from 'react';
import AppContainer from '@/components/AppContainer';
import {
  About,
  ContactMe,
  Landing,
  ScrollProgress,
  Work,
} from '@/components/Home';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { useStateContext } from '@/utils/provider';

export default function Home() {
  const parallaxRef = useRef();
  const [{ page }, dispatch] = useStateContext();
  const { isLargeScreen } = useScreenWidth();

  useEffect(() => {
    parallaxRef.current.scrollTo(page);
  }, [page]);

  return (
    <AppContainer>
      {isLargeScreen && <ScrollProgress />}
      <Parallax
        ref={parallaxRef}
        pages={4}
        style={{
          width: '80vw',
          height: '85vh',
          overflowY: 'hidden',
        }}
        enabled={false}
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Landing />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <Work />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={2.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <ContactMe />
        </ParallaxLayer>
      </Parallax>
    </AppContainer>
  );
}
