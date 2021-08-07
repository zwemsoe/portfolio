import { Box, Flex, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems={"center"}>
            <Link href='/'>
              <a style={{ color: "white" }}>ZSOE</a>
            </Link>
          </Flex>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
            >
              <Link href='/blog'>
                <a style={{ color: "white" }}>Blog</a>
              </Link>
              <Link href='/#about'>
                <a style={{ color: "white" }}>About Me</a>
              </Link>
              <Link href='/#contacts'>
                <a style={{ color: "white" }}>Contacts</a>
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
