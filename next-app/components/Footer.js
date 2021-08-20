import { useEffect, useState } from 'react';
import {
  Flex,
  Icon,
  Box,
  Center,
  VStack,
  HStack,
  Text,
  Divider,
} from '@chakra-ui/react';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { MdMusicNote } from 'react-icons/md';
import { FaSpotify } from 'react-icons/fa';
import fetcher from '@/utils/fetcher';
import NextLink from './NextLink';
import styles from '@/styles/Footer.module.scss';

export default function Footer() {
  const { isLargeScreen } = useScreenWidth();
  const [track, setTrack] = useState();

  useEffect(() => {
    fetchTrack();
  }, []);

  const fetchTrack = async () => {
    const { success, data } = await fetcher({
      method: 'GET',
      endpoint: '/api/currently-playing',
    });
    if (success) {
      setTrack(data);
    }
  };

  return (
    <>
      <Center>
        <div style={{ paddingBottom: isLargeScreen ? 15 : 0 }}>
          <HStack spacing={5}>
            <NextLink
              href={track ? track.url : '/'}
              isExternal={track ? true : false}
            >
              <Icon
                as={FaSpotify}
                w={9}
                h={9}
                color={track ? '#1DB954' : 'gray'}
                className={track ? styles.rotating : ''}
              />
            </NextLink>
            <VStack alignItems="flex-start" spacing={0}>
              <Text color="light" fontSize="sm">
                {track ? "I'm listening to: " : 'Not playing Spotify.'}
              </Text>
              <Text color="yellow">
                {track ? `${track.name} by ${track.artist}` : ''}
              </Text>
            </VStack>
          </HStack>
        </div>
      </Center>

      {!isLargeScreen && <Divider orientation="horizontal" />}
    </>
  );
}
