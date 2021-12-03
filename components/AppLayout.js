import { Divider, VStack } from '@chakra-ui/react';
import Contacts from './Contacts';
import Footer from './Footer';
import Navbar from './Navbar';

export default function AppLayout({ children, ...props }) {
  return (
    <>
      <VStack bg="dark">
        <Navbar />
        {children}
        <Divider marginTop={30} />
        <Footer />
        <Contacts />
      </VStack>
    </>
  );
}
