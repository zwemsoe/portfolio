import { VStack, Divider } from '@chakra-ui/react';
import Navbar from './Navbar';
import Contacts from './Contacts';
import Footer from './Footer';

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
