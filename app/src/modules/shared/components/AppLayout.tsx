import { Divider, VStack } from '@chakra-ui/react';
import React from 'react';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export function AppLayout({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VStack bg="dark">
        <Navbar />
        {children}
        <Divider />
        <Footer />
        <Contacts />
      </VStack>
    </>
  );
}
