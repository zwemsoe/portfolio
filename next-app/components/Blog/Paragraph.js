import { Text } from '@chakra-ui/react';

export default function BlogText({ children }) {
  return (
    <Text style={{ lineHeight: '2rem' }} fontSize="xl" marginBottom={1.5}>
      {children}
    </Text>
  );
}
