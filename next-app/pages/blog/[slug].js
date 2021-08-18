import React from 'react';
import Head from 'next/head';
import { getMDXComponent } from 'mdx-bundler/client';
import styles from '@/styles/Blog.module.scss';
import { Heading, Box, Center } from '@chakra-ui/react';

import { getAllBlogs, getSingleBlog } from '@/utils/mdx';

const Blog = ({ code, frontmatter }) => {
  const { title, slug } = frontmatter;
  const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className={styles.container}>
      <Head>
        <title>{slug}</title>
      </Head>
      <Heading size="xl" fontWeight="normal" color="white">
        {title}
      </Heading>
      <MDXComponent />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getSingleBlog(params.slug);
  return {
    props: { ...blog },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllBlogs().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Blog;
