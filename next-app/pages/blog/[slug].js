import React from 'react';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import styles from '@/styles/Blog.module.scss';
import { Heading, Text, Code, Box } from '@chakra-ui/react';
import { getAllBlogs, getSingleBlog } from '@/utils/mdx';
import AppContainer from '@/components/AppContainer';
import Components from '@/components/MDXComponents';

const Blog = ({ code, frontmatter, read_time }) => {
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
    >
      <article style={{ marginTop: 20 }}>
        <Heading
          fontSize="2.2rem"
          fontWeight="bold"
          color="white"
          fontFamily="Ubuntu"
          marginBottom={2}
        >
          {frontmatter.title}
        </Heading>
        <Text
          fontSize="md"
          fontWeight="normal"
          color="white"
          fontFamily="Ubuntu"
          marginBottom={2}
        >
          {`${format(
            new Date(frontmatter.publishedAt),
            'MMMM dd, yyyy'
          )} | ${read_time}`}
        </Text>

        <div style={{ marginBottom: 20 }}>
          {frontmatter.tags.map((tag) => (
            <Code key={tag} bg="#B2B1B9" marginRight={3}>
              {tag}
            </Code>
          ))}
        </div>

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
