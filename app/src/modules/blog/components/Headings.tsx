import { Heading } from '@chakra-ui/react';
import React from 'react';
import { BLOG_FONT } from '@/constants';

export const BlogHeading2 = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Heading
      style={{ fontFamily: BLOG_FONT }}
      fontSize="1.9rem"
      fontWeight="bold"
      marginTop={10}
      marginBottom={3}
      {...props}
    >
      {children}
    </Heading>
  );
};

export const BlogHeading3 = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <Heading
      style={{ fontFamily: BLOG_FONT }}
      size="lg"
      fontWeight="bold"
      marginTop={10}
      marginBottom={3}
      {...props}
    >
      {children}
    </Heading>
  );
};
