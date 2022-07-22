import { Box, Center, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { HOME_VIEW } from '@/constants';
import { NextLink } from '@/modules/shared/components/NextLink';
import { ActionTypes } from '@/state/actions';
import { useStateContext } from '@/state/provider';

export function About() {
  const { dispatch } = useStateContext();
  return (
    <span
      onClick={() => {
        dispatch({
          type: ActionTypes.SetPage,
          payload: HOME_VIEW.WORK,
        });
      }}
    >
      <Stack
        direction={['column', 'row']}
        spacing={{ base: 5, md: 10, lg: 20, xl: 50 }}
      >
        <Center>
          <Box maxWidth={{ base: '45vw', md: '60vw' }}>
            <Image
              src="/images/my-pic.webp"
              alt="Me!"
              width={1000}
              height={1219}
              priority
            />
          </Box>
        </Center>
        <Stack spacing={0}>
          <Heading
            size={{ sm: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="light"
          >
            ABOUT ME
          </Heading>
          <br />
          <Heading
            size={{ sm: 'lg', md: 'xl' }}
            fontWeight="bold"
            color="yellow"
          >
            Hey there, I'm Zwe!
          </Heading>
          <br />
          <Text
            fontSize={{ base: '16px', md: '20px', lg: '25px', xl: '28px' }}
            fontWeight="normal"
            color="light"
          >
            I'm currently in Vancouver, Canada. I'm a 3rd-year computer science
            student at Simon Fraser University. I have over a year experience of
            working with ReactJS and NodeJS stacks. I'm working as a Lead
            Software Engineer at{' '}
            <NextLink
              color="orange"
              href="https://www.bridgeburma.com/"
              isExternal
            >
              BridgeBurma
            </NextLink>{' '}
            and a Full-Stack developer at{' '}
            <NextLink color="orange" href="https://letsbyo.com/" isExternal>
              BYO
            </NextLink>{' '}
            . My interests include software development, clean-code, automation,
            and chess.
          </Text>
        </Stack>
      </Stack>
    </span>
  );
}
