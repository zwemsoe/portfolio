import styles from '@/styles/Blogs.module.scss';
import { Heading, Box, Center } from '@chakra-ui/react';
import AppContainer from '@/components/AppContainer';

export default function Blog() {
  return (
    <AppContainer
      containerClass={styles.container}
      title="Blog"
      description="Zwe Min Soe blogs. I write about web development tips and tricks."
    >
      <Box>
        <Center>
          <Heading size="xl" fontWeight="normal" color="white">
            Working on it...
          </Heading>
        </Center>
        <br />
        <iframe
          src="https://giphy.com/embed/pOZhmE42D1WrCWATLK"
          width="300"
          height="300"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Box>
    </AppContainer>
  );
}
