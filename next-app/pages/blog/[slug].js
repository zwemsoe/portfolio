import React from 'react';
import { parseISO, format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import styles from '@/styles/Blog.module.scss';
import { Heading, Box, Center } from '@chakra-ui/react';
import { getAllBlogs, getSingleBlog } from '@/utils/mdx';
import AppContainer from '@/components/AppContainer';
import Components from '@/components/MDXComponents';

const Blog = ({ code, frontmatter }) => {
  const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <AppContainer
      containerClass={styles.container}
      containerStyle={{ color: 'white', fontFamily: 'Ubuntu' }}
      title={frontmatter.title}
      description={frontmatter.summary}
      image={`https://zweminsoe.com${frontmatter.image}`}
      type="article"
      publishedDate={new Date(frontmatter.publishedAt).toISOString()}
      lastUpdatedDate={new Date(frontmatter.lastUpdatedAt).toISOString()}
    >
      <article style={{ marginTop: 20 }}>
        <Heading
          fontSize="2.2rem"
          fontWeight="bold"
          color="white"
          fontFamily="Ubuntu"
          marginBottom={7}
        >
          {frontmatter.title}
        </Heading>

        <MDXComponent components={{ ...Components }} />
      </article>
    </AppContainer>
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
