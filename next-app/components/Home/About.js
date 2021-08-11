import { Text, Heading, Stack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { useStateContext } from "../../utils/provider";
import { SET_PAGE } from "../../utils/actions";
import myPic from "../../public/assets/my-pic.png";

export default function About() {
  const [{ page }, dispatch] = useStateContext();
  return (
    <span
      onClick={() => {
        dispatch({
          type: SET_PAGE,
          page: 2,
        });
      }}
    >
      <HStack spacing={{ base: 5, md: 10, lg: 20, xl: 50 }}>
        <Image src={myPic} alt='Me!' width={1500} height={1500} quality={100} />
        <Stack>
          <Heading size='xl' fontWeight='bold' color='light'>
            ABOUT ME
          </Heading>
          <br />
          <Heading size='2xl' fontWeight='bold' color='yellow'>
            Hey there, I'm Zwe!
          </Heading>
          <br />
          <Text
            fontSize={{ base: "16px", md: "20px", lg: "25px", xl: "28px" }}
            fontWeight='normal'
            color='light'
          >
            I'm currently in Vancouver, Canada. I'm a 3rd-year computer science
            student at Simon Fraser University. I have over a year experience of
            working with ReactJS and NodeJS stacks. I'm working as a Lead
            Software Engineer at BridgeBurma and a Full-Stack developer at BYO.
            My interests include software development, clean-code, automation,
            and chess.
          </Text>
        </Stack>
      </HStack>
    </span>
  );
}
