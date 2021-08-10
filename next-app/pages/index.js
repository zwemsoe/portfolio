import Head from "next/head";
import Image from "next/image";
import { Button, Text, VStack, Flex, Icon } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { FaCircle } from "react-icons/fa";
import myPic from "../public/assets/my-pic.png";
import styles from "../styles/Home.module.css";

const ScrollProgress = () => {
  return (
    <Flex
      sx={{
        position: "fixed",
        top: "50%",
        left: 10,
      }}
    >
      <VStack>
        <Icon as={FaCircle} w={2} h={2} color='white' />
        <Icon as={FaCircle} w={2} h={2} color='white' />
        <Icon as={FaCircle} w={2} h={2} color='white' />
        <Icon as={FaCircle} w={2} h={2} color='white' />
        <Icon as={FaCircle} w={2} h={2} color='white' />
      </VStack>
    </Flex>
  );
};

const ParallexScreen = () => {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
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
        <p>Scroll down</p>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={5} style={{}} />

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
        <p>Scroll up</p>
      </ParallaxLayer>
    </Parallax>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zwe's Portfolio</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
      </Head>
      <ScrollProgress />
      <ParallexScreen />
    </div>
  );
}
