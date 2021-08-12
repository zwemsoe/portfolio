import { useRef, useEffect } from "react";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/Home.module.css";
import { useStateContext } from "../utils/provider";
import { SET_PAGE } from "../utils/actions";
import {
  ScrollProgress,
  Landing,
  About,
  Dev,
  ContactMe,
} from "../components/Home";
import useScreenWidth from "../utils/hooks/useScreenWidth";

export default function Home() {
  const parallaxRef = useRef();
  const [{ page }, dispatch] = useStateContext();
  const { isLargeScreen } = useScreenWidth();

  useEffect(() => {
    parallaxRef.current.scrollTo(page);
  }, [page]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
      </Head>
      {isLargeScreen && <ScrollProgress />}

      <Parallax
        ref={parallaxRef}
        pages={5}
        style={{
          width: "80vw",
          height: "80vh",
          overflowY: "hidden",
        }}
        enabled={false}
      >
        <ParallaxLayer
          offset={0}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Landing />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <About />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <Dev />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <ContactMe />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
