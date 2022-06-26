import { Center, Divider, HStack, Icon, Text, VStack } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { useCurrentTrack, useScreenWidth } from '../hooks';
import { NextLink } from './NextLink';

export function Footer() {
  const { data } = useCurrentTrack();
  const { isLargeScreen } = useScreenWidth();

  return (
    <>
      {!isLargeScreen && (
        <>
          <Center>
            <div style={{ paddingBottom: 0 }}>
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
                    className={data?.track ? 'spotify-rotating' : ''}
                  />
                </NextLink>
                <VStack alignItems="flex-start" spacing={0}>
                  <Text color="light" fontSize="sm">
                    {data?.track
                      ? "I'm listening to: "
                      : 'Not playing Spotify.'}
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
          <Divider orientation="horizontal" />
        </>
      )}
    </>
  );
}
