import { Text } from '@chakra-ui/react';

export default function BlogText({ children }) {
  return (
    <Text
      style={{ lineHeight: '2.5rem' }}
      fontSize={{ base: '17px', md: '18px', lg: '19px', xl: '21px' }}
      marginBottom={1.5}
    >
      {children}
    </Text>
  );
}
