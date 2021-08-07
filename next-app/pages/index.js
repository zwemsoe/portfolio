import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Text color='white'>
          Hello, I'm Zwe Min Soe. A 3rd-year university student and an aspiring
          full-stack developer.
        </Text>
      </div>
    </div>
  );
}
