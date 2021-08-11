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
  Button,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import nameLogo from "../public/assets/name.svg";
import useScreenWidth from "../utils/hooks/useScreenWidth";
import { CustomLink } from "../styles/components";
import { useStateContext } from "../utils/provider";
import { SET_PAGE } from "../utils/actions";

export default function Navbar() {
  const { isLargeScreen } = useScreenWidth();
  const [{ page }, dispatch] = useStateContext();

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-around"} w='100%'>
        <Flex alignItems={"center"}>
          <Link href='/'>
            <CustomLink
              onClick={() =>
                dispatch({
                  type: SET_PAGE,
                  page: 0,
                })
              }
            >
              <Image
                src={nameLogo}
                alt='Name Logo'
                width={150}
                height={50}
                quality={100}
              />
            </CustomLink>
          </Link>
        </Flex>
        {isLargeScreen ? <DesktopNav /> : <MobileNav />}
      </Flex>
    </>
  );
}

const DesktopNav = () => {
  const [{ page }, dispatch] = useStateContext();

  return (
    <HStack spacing={8} alignItems={"center"}>
      <HStack as='nav' spacing={10} display={{ base: "none", md: "flex" }}>
        <Link href='/blog'>
          <CustomLink color='white' underline>
            <Heading size='md' fontWeight='normal'>
              Blog
            </Heading>
          </CustomLink>
        </Link>

        <Link href='/'>
          <CustomLink
            color='white'
            underline
            onClick={() => {
              dispatch({
                type: SET_PAGE,
                page: 1,
              });
            }}
          >
            <Heading size='md' fontWeight='normal'>
              About Me
            </Heading>
          </CustomLink>
        </Link>

        <Link href='/'>
          <CustomLink
            color='white'
            underline
            onClick={() =>
              dispatch({
                type: SET_PAGE,
                page: 2,
              })
            }
          >
            <Heading size='md' fontWeight='normal'>
              Experience
            </Heading>
          </CustomLink>
        </Link>

        <CustomLink
          href='https://drive.google.com/file/d/1RR6guwXSVYFPDXjrHtCg9pMiTbkcy9RW/view?usp=sharing'
          color='white'
          underline
          target='_blank'
        >
          <Heading size='md' fontWeight='normal'>
            Resume
          </Heading>
        </CustomLink>
      </HStack>
    </HStack>
  );
};

const MobileNav = () => {
  return (
    <Menu>
      <MenuButton
        colorScheme='none'
        as={IconButton}
        icon={<Icon as={HiMenu} w={6} h={6} color='white' />}
      />

      <MenuList>
        <MenuItem>
          <Link href='/blog'>
            <CustomLink color='black'>
              <Heading size='xs' fontWeight='normal'>
                Blog
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href='/'>
            <CustomLink
              color='black'
              underline
              onClick={() =>
                dispatch({
                  type: SET_PAGE,
                  page: 1,
                })
              }
            >
              <Heading size='xs' fontWeight='normal'>
                About Me
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>

        <MenuItem>
          <Link href='/'>
            <CustomLink
              color='black'
              underline
              onClick={() =>
                dispatch({
                  type: SET_PAGE,
                  page: 2,
                })
              }
            >
              <Heading size='xs' fontWeight='normal'>
                Experience
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>

        <MenuItem>
          <CustomLink
            href='https://drive.google.com/file/d/1RR6guwXSVYFPDXjrHtCg9pMiTbkcy9RW/view?usp=sharing'
            color='black'
            target='_blank'
          >
            <Heading size='xs' fontWeight='normal'>
              Resume
            </Heading>
          </CustomLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
