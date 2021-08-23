import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import styles from '@/styles/Blogs.module.scss';
import { Heading, Box, Center, Text, Stack, Flex } from '@chakra-ui/react';
import AppContainer from '@/components/AppContainer';
import { getAllBlogs } from '@/utils/mdx';
import postAPI from '@/utils/postAPI';
import NextLink from '@/components/NextLink';

const BlogCard = ({ blog, views }) => {
  return (
    <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NextLink href={`/blog/${blog.slug}`}>
        <Stack m="5">
          <Flex flexDirection="row" justifyContent="space-between">
            <Heading size="lg" color="light" fontWeight="bold">
              {blog.frontmatter.title}
            </Heading>
            <Center>
              <Text size="lg" color="light" fontWeight="medium">
                {views[blog.slug] ?? 0} views
              </Text>
            </Center>
          </Flex>
          <Text size="md" color="yellow" fontWeight="medium">
            {blog.frontmatter.summary}
          </Text>
          <Text size="md" color="light" fontWeight="medium">
            {format(new Date(blog.frontmatter.publishedAt), 'MMMM dd, yyyy')}
          </Text>
        </Stack>
      </NextLink>
    </Box>
  );
};

export default function Blog({ blogs }) {
  const [views, setViews] = useState({});

  useEffect(() => {
    fetchViewCounts();
  }, []);

  const fetchViewCounts = async () => {
    try {
      for (let blog of blogs) {
        const { viewCount } = await postAPI({
          method: 'POST',
          endpoint: '/api/fetch-views',
          data: { slug: blog.slug },
        });
        const new_views = { ...views };
        new_views[blog.slug] = viewCount;
        setViews(new_views);
      }
      console.log(views);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContainer
      containerClass={styles.container}
      title="Blog"
      description="Zwe Min Soe blogs. I write about web development tips and tricks."
    >
      <Heading size="xl" fontWeight="bold" color="white" marginBottom={10}>
        All Posts
      </Heading>
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} blog={blog} views={views} />
      ))}
    </AppContainer>
  );
}

export const getStaticProps = async () => {
  const blogs = getAllBlogs();
  return {
    props: { blogs },
  };
};
