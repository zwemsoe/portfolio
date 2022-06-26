import { Text } from '@chakra-ui/react';
import React from 'react';

export const BlogText = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text
      style={{ lineHeight: '2.5rem' }}
      fontSize={{ base: '17px', md: '18px', lg: '19px', xl: '21px' }}
      marginBottom={1.5}
    >
      {children}
    </Text>
  );
};
