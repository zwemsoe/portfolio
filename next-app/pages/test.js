import Head from 'next/head';
import { Heading, Box, Center } from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Blog.module.scss';

const Blog = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
        <meta name="description" content="Test" />
      </Head>
      <article></article>
    </div>
  );
};

Blog.getInitialProps = async function (context) {};

export default Blog;
