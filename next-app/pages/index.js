import { useRef, useEffect } from "react";
import Head from "next/head";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/Home.module.css";
import { useStateContext } from "../utils/provider";
import { SET_PAGE } from "../utils/actions";
import { ScrollProgress, Landing } from "../components/Home";
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
        <title>Zwe's Portfolio</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
      </Head>
      {isLargeScreen && <ScrollProgress />}

      <Parallax
        ref={parallaxRef}
        pages={5}
        style={{
          width: "80vw",
          height: "80vh",
          "overflow-y": "hidden",
        }}
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
          <span
            onClick={() => {
              dispatch({
                type: SET_PAGE,
                page: 2,
              });
            }}
          >
            <p>About Me</p>
          </span>
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
          <span
            onClick={() => {
              dispatch({
                type: SET_PAGE,
                page: 3,
              });
            }}
          >
            <p>Experience</p>
          </span>
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
          <span
            onClick={() => {
              dispatch({
                type: SET_PAGE,
                page: 4,
              });
            }}
          >
            <p>Skills</p>
          </span>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <span
            onClick={() => {
              dispatch({
                type: SET_PAGE,
                page: 0,
              });
            }}
          >
            <p>Get in touch!</p>
          </span>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
