import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Heading, Text, Tag, Button, Divider } from '@chakra-ui/react';
import styles from '@/styles/Blog.module.scss';
import AppContainer from '@/components/AppContainer';
import { BLOG_FONT } from '@/constants';
import { useStateContext } from '@/utils/provider';
import { SET_PAGE } from '@/utils/actions';
import NextLink from '@/components/NextLink';
import { HOME_VIEW } from '@/constants';
import postAPI from '@/utils/postAPI';
import formatNumber from '@/utils/formatNumber';

export default function BlogContainer({
  frontmatter,
  read_time,
  slug,
  children,
}) {
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
          )} | ${read_time} | ${formatNumber(views)} views`}
        </Text>

        <div style={{ marginBottom: 30 }}>
          {frontmatter.tags.map((tag) => (
            <Tag key={tag} bg="#B2B1B9" marginRight={3}>
              {tag}
            </Tag>
          ))}
        </div>

        <div style={{ maxWidth: '90vw', marginBottom: 30 }}>{children}</div>

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
}
