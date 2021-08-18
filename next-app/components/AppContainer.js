import { VStack, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Contacts from './Contacts';

export default function AppContainer({ children, ...props }) {
  return (
    <>
      <VStack bg="dark">
        <Navbar />
        <main>{children}</main>
        <Contacts />
      </VStack>
    </>
  );
}
