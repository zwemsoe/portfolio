import { UnorderedList, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
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
