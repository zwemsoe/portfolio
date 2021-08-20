import { Heading } from '@chakra-ui/react';

export const BlogHeading2 = ({ children }) => {
  return (
    <Heading
      style={{ fontFamily: 'Ubuntu' }}
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
      style={{ fontFamily: 'Ubuntu' }}
      fontSize="xl"
      fontWeight="bold"
      marginTop={10}
      marginBottom={3}
    >
      {children}
    </Heading>
  );
};
