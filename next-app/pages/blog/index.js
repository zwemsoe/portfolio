import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { Button, Text } from "@chakra-ui/react";

export default function Blog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog</title>
        <meta name='description' content="Zwe Min Soe's Blog" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Text color='gray.500'>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Text>
      </div>
    </div>
  );
}
