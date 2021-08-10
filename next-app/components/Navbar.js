import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Portal,
  Icon,
} from "@chakra-ui/react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import nameLogo from "../public/assets/name.svg";
import useDeviceDetect from "../hooks/useDeviceDetect";

export default function Navbar() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-around"}
        w='100%'
      >
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
        {isMobile() ? <MobileNav /> : <DesktopNav />}
      </Flex>
    </>
  );
}

const DesktopNav = () => {
  return (
    <HStack spacing={8} alignItems={"center"}>
      <HStack as='nav' spacing={10} display={{ base: "none", md: "flex" }}>
        <Link href='/blog'>
          <a style={{ color: "white" }}>
            <Heading size='md' fontWeight='normal'>
              Blog
            </Heading>
          </a>
        </Link>
        <Link href='/#about'>
          <a style={{ color: "white" }}>
            <Heading size='md' fontWeight='normal'>
              About Me
            </Heading>
          </a>
        </Link>
        <Link href='/#progress'>
          <a style={{ color: "white" }}>
            <Heading size='md' fontWeight='normal'>
              Experience
            </Heading>
          </a>
        </Link>
        <Link href='/#contacts'>
          <a style={{ color: "white" }}>
            <Heading size='md' fontWeight='normal'>
              Resume
            </Heading>
          </a>
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
            <a style={{ color: "black" }}>
              <Heading size='xs' fontWeight='normal'>
                Blog
              </Heading>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/#about'>
            <a style={{ color: "black" }}>
              <Heading size='xs' fontWeight='normal'>
                About Me
              </Heading>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/#progress'>
            <a style={{ color: "black" }}>
              <Heading size='xs' fontWeight='normal'>
                Experience
              </Heading>
            </a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href='/#contacts'>
            <a style={{ color: "black" }}>
              <Heading size='xs' fontWeight='normal'>
                Resume
              </Heading>
            </a>
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
