import { ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

export const BlogUnorderedList = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <UnorderedList marginTop={3} marginBottom={3}>
      {children}
    </UnorderedList>
  );
};

export const BlogUnorderedListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ListItem style={{ lineHeight: '2rem', color: 'yellow' }}>
      <Text
        color="light"
        fontSize={{ base: '17px', md: '18px', lg: '19px', xl: '21px' }}
      >
        {children}
      </Text>
    </ListItem>
  );
};
