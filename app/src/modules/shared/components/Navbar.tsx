import {
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaSpotify } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { useCurrentTrack, useScreenWidth } from '../hooks';
import { NextLink } from './NextLink';
import { HOME_VIEW, RESUME_LINK } from '@/constants';
import nameLogo from '@/public/images/name.svg';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';

export function Navbar() {
  const { isLargeScreen } = useScreenWidth();
  const { dispatch } = useStateContext();

  return (
    <>
      <Flex
        alignItems={'center'}
        justifyContent={isLargeScreen ? 'space-around' : 'space-between'}
        w="100%"
      >
        <Flex alignItems={'center'} marginLeft={isLargeScreen ? 0 : 5}>
          <NextLink
            href="/"
            onClick={() =>
              dispatch({
                type: ActionTypes.SetPage,
                payload: HOME_VIEW.LANDING,
              })
            }
          >
            <Image
              src={nameLogo}
              alt="Name Logo"
              width={150}
              height={50}
              quality={100}
              priority
            />
          </NextLink>
        </Flex>
        {isLargeScreen ? <DesktopNav /> : <MobileNav />}
      </Flex>
    </>
  );
}

const DesktopNav = () => {
  const { data } = useCurrentTrack();
  const { dispatch } = useStateContext();

  return (
    <HStack spacing={8} alignItems={'center'}>
      <HStack as="nav" spacing={10} display={{ base: 'none', md: 'flex' }}>
        <NextLink href="/blog" color="white" underline>
          <Heading size="md" fontWeight="normal">
            Blog
          </Heading>
        </NextLink>

        <NextLink
          href="/"
          color="white"
          underline
          onClick={() => {
            dispatch({
              type: ActionTypes.SetPage,
              payload: HOME_VIEW.ABOUT,
            });
          }}
        >
          <Heading size="md" fontWeight="normal">
            About Me
          </Heading>
        </NextLink>

        <NextLink
          href="/"
          color="white"
          underline
          onClick={() =>
            dispatch({
              type: ActionTypes.SetPage,
              payload: HOME_VIEW.WORK,
            })
          }
        >
          <Heading size="md" fontWeight="normal">
            Work
          </Heading>
        </NextLink>

        <NextLink href={RESUME_LINK} color="white" underline isExternal>
          <Heading size="md" fontWeight="normal">
            Resume
          </Heading>
        </NextLink>

        <Tooltip
          label={
            <VStack alignItems="flex-start" spacing={1} margin={2}>
              <Text color="light" fontSize="sm">
                {data?.track ? 'Listening to: ' : 'Not playing Spotify.'}
              </Text>
              <HStack spacing={2}>
                <Image
                  src={data?.track.image}
                  alt={data?.track.name}
                  width={64}
                  height={64}
                />
                <Text color="yellow">
                  {data?.track
                    ? `${data?.track.name} - ${data?.track.artist}`
                    : ''}
                </Text>
              </HStack>
            </VStack>
          }
        >
          <span>
            <NextLink
              href={data?.track ? data?.track.url : '/'}
              isExternal={data?.track ? true : false}
            >
              <Icon
                as={FaSpotify}
                w={7}
                h={7}
                color={data?.track ? '#1DB954' : 'gray'}
                className={data?.track ? 'spotify-rotating' : ''}
              />
            </NextLink>
          </span>
        </Tooltip>
      </HStack>
    </HStack>
  );
};

const MobileNav = () => {
  const { dispatch } = useStateContext();
  return (
    <Menu>
      <MenuButton
        colorScheme="none"
        alt="Menu Button"
        as={IconButton}
        icon={<Icon as={HiMenu} w={6} h={6} color="white" />}
      />

      <MenuList>
        <NextLink href="/blog">
          <MenuItem>
            <Heading size="xs" fontWeight="normal">
              Blog
            </Heading>
          </MenuItem>
        </NextLink>

        <NextLink
          href="/"
          color="black"
          underline
          onClick={() =>
            dispatch({
              type: ActionTypes.SetPage,
              payload: HOME_VIEW.ABOUT,
            })
          }
        >
          <MenuItem>
            <Heading size="xs" fontWeight="normal">
              About Me
            </Heading>
          </MenuItem>
        </NextLink>

        <NextLink
          href="/"
          color="black"
          underline
          onClick={() =>
            dispatch({
              type: ActionTypes.SetPage,
              payload: HOME_VIEW.WORK,
            })
          }
        >
          <MenuItem>
            <Heading size="xs" fontWeight="normal">
              Work
            </Heading>
          </MenuItem>
        </NextLink>

        <NextLink href={RESUME_LINK} color="black" isExternal>
          <MenuItem>
            <Heading size="xs" fontWeight="normal">
              Resume
            </Heading>
          </MenuItem>
        </NextLink>
      </MenuList>
    </Menu>
  );
};
