import Head from 'next/head';
import styles from '../styles/Blog.module.css';
import { Heading } from '@chakra-ui/react';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404</title>
      </Head>
      <Heading size="xl" fontWeight="normal" color="white">
        404 - Page Not Found.
      </Heading>
    </div>
  );
}
