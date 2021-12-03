import { Center, Divider, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import useSWR from 'swr';
import NextLink from './NextLink';
import styles from '@/styles/Footer.module.scss';
import fetcher from '@/utils/fetcher';
import useScreenWidth from '@/utils/hooks/useScreenWidth';

export default function Footer() {
  const { data, error } = useSWR('/api/currently-playing', fetcher);
  const { isLargeScreen } = useScreenWidth();

  if (error) {
    console.log('error: ', error);
  }

  return (
    <>
      <Center>
        <div style={{ paddingBottom: isLargeScreen ? 15 : 0 }}>
          <HStack spacing={5}>
            <NextLink
              href={data?.track ? data?.track.url : '/'}
              isExternal={data?.track ? true : false}
            >
              <Icon
                as={FaSpotify}
                w={9}
                h={9}
                color={data?.track ? '#1DB954' : 'gray'}
                className={data?.track ? styles.rotating : ''}
              />
            </NextLink>
            <VStack alignItems="flex-start" spacing={0}>
              <Text color="light" fontSize="sm">
                {data?.track ? "I'm listening to: " : 'Not playing Spotify.'}
              </Text>
              <Text color="yellow">
                {data?.track
                  ? `${data?.track.name} - ${data?.track.artist}`
                  : ''}
              </Text>
            </VStack>
          </HStack>
        </div>
      </Center>

      {!isLargeScreen && <Divider orientation="horizontal" />}
    </>
  );
}
