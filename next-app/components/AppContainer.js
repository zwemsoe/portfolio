import { VStack, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Contacts from './Contacts';
import Footer from './Footer';

export default function AppContainer({ children, ...props }) {
  return (
    <>
      <VStack bg="dark">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Contacts />
      </VStack>
    </>
  );
}
