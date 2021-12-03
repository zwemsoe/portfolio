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
} from '@chakra-ui/react';
import Image from 'next/image';
import { HiMenu } from 'react-icons/hi';
import NextLink from './NextLink';
import { HOME_VIEW } from '@/constants';
import nameLogo from '@/public/images/name.svg';
import { SET_PAGE } from '@/utils/actions';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { useStateContext } from '@/utils/provider';

const RESUME_LINK =
  'https://drive.google.com/file/d/1doCONkrme5_v29oaqI413MpoCREObBKc/view?usp=sharing';

export default function Navbar() {
  const { isLargeScreen } = useScreenWidth();
  const [{ page }, dispatch] = useStateContext();

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
                type: SET_PAGE,
                page: HOME_VIEW.LANDING,
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
  const [{ page }, dispatch] = useStateContext();

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
              type: SET_PAGE,
              page: HOME_VIEW.ABOUT,
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
              type: SET_PAGE,
              page: HOME_VIEW.WORK,
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
      </HStack>
    </HStack>
  );
};

const MobileNav = () => {
  const [{ page }, dispatch] = useStateContext();
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
              type: SET_PAGE,
              page: HOME_VIEW.ABOUT,
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
              type: SET_PAGE,
              page: HOME_VIEW.WORK,
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
