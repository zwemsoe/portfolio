import { ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const BlogUnorderedList = ({ children }) => {
  return (
    <UnorderedList marginTop={3} marginBottom={3}>
      {children}
    </UnorderedList>
  );
};

export const BlogUnorderedListItem = ({ children }) => {
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
