import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content="Zwe Min Soe's Portfolio" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Button colorScheme='blue'>Button</Button>
      </div>
    </div>
  );
}
