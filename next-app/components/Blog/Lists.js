import { UnorderedList, ListItem, Text } from '@chakra-ui/react';

export const BlogUnorderedList = ({ children }) => {
  return (
    <UnorderedList style={{}} marginTop={3} marginBottom={3}>
      {children}
    </UnorderedList>
  );
};

export const BlogUnorderedListItem = ({ children }) => {
  return (
    <ListItem style={{ lineHeight: '2rem', color: 'yellow' }}>
      <Text color="light" fontSize="xl">
        {children}
      </Text>
    </ListItem>
  );
};
