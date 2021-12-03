import {
  Box,
  Center,
  Flex,
  Heading,
  Skeleton,
  Stack,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import AppContainer from '@/components/AppContainer';
import NextLink from '@/components/NextLink';
import { getAllBlogs } from '@/lib/mdx';
import styles from '@/styles/Blogs.module.scss';
import formatNumber from '@/utils/formatNumber';
import requestAPI from '@/utils/requestAPI';

const BlogCard = ({ blog, views, viewsLoaded }) => {
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
              <Skeleton isLoaded={viewsLoaded}>
                <Text
                  color="light"
                  fontWeight="medium"
                  fontSize={{ base: '15px', md: '18px', lg: '18px' }}
                >
                  {`${formatNumber(views[blog.slug])} views`}
                </Text>
              </Skeleton>
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
  const [viewsLoaded, setViewsLoaded] = useBoolean(false);

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
      setViewsLoaded.on();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContainer
      containerClass={styles.container}
      customMeta={{
        title: 'Blog',
        description: 'I write about web development tips and tricks.',
      }}
    >
      <Heading size="xl" fontWeight="bold" color="white" marginBottom={10}>
        All Posts
      </Heading>
      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          blog={blog}
          views={views}
          viewsLoaded={viewsLoaded}
        />
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
