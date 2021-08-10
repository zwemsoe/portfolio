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
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import nameLogo from "../public/assets/name.svg";
import useScreenWidth from "../hooks/useScreenWidth";
import { CustomLink } from "../styles/components";

export default function Navbar() {
  const { isLargeScreen } = useScreenWidth();

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-around"} w='100%'>
        <Flex alignItems={"center"}>
          <Link href='/'>
            <a>
              <Image
                src={nameLogo}
                alt='Name Logo'
                width={150}
                height={50}
                quality={100}
              />
            </a>
          </Link>
        </Flex>
        {isLargeScreen ? <DesktopNav /> : <MobileNav />}
      </Flex>
    </>
  );
}

const DesktopNav = () => {
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
        <Link href='/#about'>
          <CustomLink color='white' underline>
            <Heading size='md' fontWeight='normal'>
              About Me
            </Heading>
          </CustomLink>
        </Link>
        <Link href='/#progress'>
          <CustomLink color='white' underline>
            <Heading size='md' fontWeight='normal'>
              Experience
            </Heading>
          </CustomLink>
        </Link>
        <Link href='/#contacts'>
          <CustomLink color='white' underline>
            <Heading size='md' fontWeight='normal'>
              Resume
            </Heading>
          </CustomLink>
        </Link>
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
          <Link href='/#about'>
            <CustomLink color='black'>
              <Heading size='xs' fontWeight='normal'>
                About Me
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/#progress'>
            <CustomLink color='black'>
              <Heading size='xs' fontWeight='normal'>
                Experience
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/#contacts'>
            <CustomLink color='black'>
              <Heading size='xs' fontWeight='normal'>
                Resume
              </Heading>
            </CustomLink>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
