import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Icon,
} from '@chakra-ui/react';
import { HiMenu } from 'react-icons/hi';
import Image from 'next/image';
import nameLogo from '@/public/images/name.svg';
import useScreenWidth from '@/utils/hooks/useScreenWidth';
import { useStateContext } from '@/utils/provider';
import { SET_PAGE } from '@/utils/actions';
import NextLink from './NextLink';

const RESUME_LINK =
  'https://drive.google.com/file/d/1nZAXFMMI1c1U2UtzI_dbeoewk4HBvmqI/view';

export default function Navbar() {
  const { isLargeScreen } = useScreenWidth();
  const [{ page }, dispatch] = useStateContext();

  return (
    <>
      <Flex alignItems={'center'} justifyContent={'space-around'} w="100%">
        <Flex alignItems={'center'}>
          <NextLink
            href="/"
            onClick={() =>
              dispatch({
                type: SET_PAGE,
                page: 0,
              })
            }
          >
            <Image
              src={nameLogo}
              alt="Name Logo"
              width={150}
              height={50}
              quality={100}
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
              page: 1,
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
              page: 2,
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
              page: 1,
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
              page: 2,
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
