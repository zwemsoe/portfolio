import { Heading } from '@chakra-ui/react';
import { BLOG_FONT } from '@/constants';

export const BlogHeading2 = ({ children }) => {
  return (
    <Heading
      style={{ fontFamily: BLOG_FONT }}
      fontSize="2xl"
      fontWeight="bold"
      marginTop={10}
      marginBottom={3}
    >
      {children}
    </Heading>
  );
};

export const BlogHeading3 = ({ children }) => {
  return (
    <Heading
      style={{ fontFamily: BLOG_FONT }}
      fontSize="xl"
      fontWeight="bold"
      marginTop={10}
      marginBottom={3}
    >
      {children}
    </Heading>
  );
};
