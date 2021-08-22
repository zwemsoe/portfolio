import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { getMDXComponent } from 'mdx-bundler/client';
import { Heading, Text, Code, Button, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import styles from '@/styles/Blog.module.scss';
import { getAllBlogs, getSingleBlog } from '@/utils/mdx';
import AppContainer from '@/components/AppContainer';
import Components from '@/components/MDXComponents';
import { BLOG_FONT } from '@/constants';
import { useStateContext } from '@/utils/provider';
import { SET_PAGE } from '@/utils/actions';
import NextLink from '@/components/NextLink';
import { HOME_VIEW } from '@/constants';
import postAPI from '@/utils/postAPI';

const Blog = ({ code, frontmatter, read_time, slug }) => {
  const [{ page }, dispatch] = useStateContext();
  const [views, setViews] = useState(0);

  useEffect(() => {
    fetchViewCount();
  }, []);

  const fetchViewCount = async () => {
    try {
      const { viewCount } = await postAPI({
        method: 'POST',
        endpoint: '/api/add-viewcount',
        data: { slug },
      });
      setViews(viewCount);
    } catch (err) {
      console.log(err);
    }
  };

  const MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <AppContainer
      containerClass={styles.container}
      containerStyle={{ color: 'white', fontFamily: BLOG_FONT }}
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
          fontFamily={BLOG_FONT}
          marginBottom={2}
        >
          {frontmatter.title}
        </Heading>
        <Text
          fontSize="md"
          fontWeight="normal"
          color="white"
          fontFamily={BLOG_FONT}
          marginBottom={4}
        >
          {`${format(
            new Date(frontmatter.publishedAt),
            'MMMM dd, yyyy'
          )} | ${read_time} | ${views} views`}
        </Text>

        <div style={{ marginBottom: 30 }}>
          {frontmatter.tags.map((tag) => (
            <Code key={tag} bg="#B2B1B9" marginRight={3}>
              {tag}
            </Code>
          ))}
        </div>

        <div style={{ maxWidth: '90vw', marginBottom: 30 }}>
          <MDXComponent components={{ ...Components }} />
        </div>

        <Divider />

        <Text
          fontSize="xl"
          fontWeight="normal"
          color="white"
          fontFamily={BLOG_FONT}
          marginTop={5}
        >
          Please feel free to share a few words if what I wrote is confusing or
          incorrect. Any feedback or suggestions are apprieciated.
        </Text>
        <NextLink
          href="/"
          onClick={() =>
            dispatch({
              type: SET_PAGE,
              page: HOME_VIEW.CONTACT,
            })
          }
        >
          <Button
            mt={4}
            style={{ background: '#FBD802' }}
            color="dark"
            type="submit"
          >
            Send feedback
          </Button>
        </NextLink>
      </article>
    </AppContainer>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getSingleBlog(params.slug);
  return {
    props: { ...blog, slug: params.slug },
  };
};

export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();
  return {
    paths: blogs.map((b) => ({
      params: {
        slug: b.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export default Blog;
