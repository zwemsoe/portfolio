import {
  Button,
  Divider,
  Flex,
  Heading,
  Skeleton,
  Tag,
  Text,
  useBoolean,
} from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import React from 'react';
import { IFrontmatter } from '../interfaces';
import { BLOG_FONT } from '@/constants';
import { HOME_VIEW } from '@/constants';
import { AppContainer, NextLink } from '@/modules/shared/components';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';
import styles from '@/styles/Blog.module.scss';
import { formatNumber } from '@/utils/misc';
import { requestAPI } from '@/utils/requestAPI';

interface IBlogContainer {
  frontmatter: IFrontmatter;
  read_time: string;
  slug: string;
  children: React.ReactNode;
}

export function BlogContainer({
  frontmatter,
  read_time,
  slug,
  children,
}: IBlogContainer) {
  const { dispatch } = useStateContext();
  const [views, setViews] = useState(0);
  const [viewsLoaded, setViewsLoaded] = useBoolean(false);

  useEffect(() => {
    updateViewCount();
  }, []);

  const updateViewCount = async () => {
    try {
      const { viewCount } = await requestAPI({
        method: 'POST',
        endpoint: '/api/views/update',
        data: { slug },
      });
      setViews(viewCount);
      setViewsLoaded.on();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppContainer
      containerClass={styles.container}
      containerStyle={{ color: 'white', fontFamily: BLOG_FONT }}
      customMeta={{
        title: frontmatter.title,
        description: frontmatter.summary,
        image: `https://zweminsoe.com${frontmatter.image}`,
        type: 'article',
        publishedDate: new Date(frontmatter.publishedAt).toISOString(),
      }}
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

        <Flex flexDirection="row" justifyContent="space-between">
          <Text
            fontSize="md"
            fontWeight="normal"
            color="white"
            fontFamily={BLOG_FONT}
            marginBottom={4}
          >
            {`${format(
              parseISO(frontmatter.publishedAt),
              'MMMM dd, yyyy'
            )} | ${read_time}`}
          </Text>

          <Skeleton startColor="yellow" height={8} isLoaded={viewsLoaded}>
            <Text
              fontSize="md"
              fontWeight="medium"
              color="yellow"
              fontFamily={BLOG_FONT}
              marginBottom={4}
            >
              {`${formatNumber(views)} views`}
            </Text>
          </Skeleton>
        </Flex>

        <div style={{ marginBottom: 30 }}>
          {frontmatter.tags.map((tag: string) => (
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
              type: ActionTypes.SetPage,
              payload: HOME_VIEW.CONTACT,
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
