import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import styles from '@/styles/Blogs.module.scss';
import { Heading, Box, Center, Text, Stack, Flex } from '@chakra-ui/react';
import AppContainer from '@/components/AppContainer';
import { getAllBlogs } from '@/lib/mdx';
import requestAPI from '@/utils/requestAPI';
import NextLink from '@/components/NextLink';
import formatNumber from '@/utils/formatNumber';

const BlogCard = ({ blog, views }) => {
  return (
    <Box width="100%" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <NextLink href={`/blog/${blog.slug}`}>
        <Stack m="5">
          <Flex flexDirection="row" justifyContent="space-between">
            <Heading
              fontSize={{ base: '18px', md: '23px', lg: '26px' }}
              color="light"
              fontWeight="bold"
            >
              {blog.frontmatter.title}
            </Heading>
            <Center>
              <Text
                color="light"
                fontWeight="medium"
                fontSize={{ base: '15px', md: '18px', lg: '18px' }}
              >
                {`${formatNumber(views[blog.slug]) ?? 0} views`}
              </Text>
            </Center>
          </Flex>
          <Text
            fontSize={{ base: '13px', md: '16px', lg: '17px' }}
            color="yellow"
            fontWeight="medium"
          >
            {blog.frontmatter.summary}
          </Text>
          <Text size="sm" color="light" fontWeight="medium">
            {format(parseISO(blog.frontmatter.publishedAt), 'MMMM dd, yyyy')}
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
        const { viewCount } = await requestAPI({
          method: 'GET',
          endpoint: `/api/views/${blog.slug}`,
        });
        const new_views = { ...views };
        new_views[blog.slug] = viewCount;
        setViews(new_views);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContainer
      containerClass={styles.container}
      title="Blog"
      description="I write about web development tips and tricks."
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
