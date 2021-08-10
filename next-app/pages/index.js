import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import myPic from "../public/assets/my-pic.png";
import { Button, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
      </Head>
      <VStack>
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
        <Image src={myPic} alt='Me!' width={240} height={240} quality={100} />
      </VStack>
    </div>
  );
}
