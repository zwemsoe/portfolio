import { Code } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { BlogHeading2, BlogHeading3 } from './Headings';
import { BlogLink } from './Link';
import { BlogUnorderedList, BlogUnorderedListItem } from './Lists';
import { BlogText } from './Paragraph';

const CodeFile = ({ children }: { children: React.ReactNode }) => {
  return (
    <Code colorScheme="orange" marginTop={5}>
      {children}
    </Code>
  );
};

const CustomImage = ({
  src = '',
  width = 1000,
  height = 400,
  alt = '',
  ...props
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Image alt={alt} src={src} width={width} height={height} {...props} />
    </div>
  );
};

export const MDXComponents = {
  CustomImage,
  a: BlogLink,
  code: Code,
  p: BlogText,
  ul: BlogUnorderedList,
  li: BlogUnorderedListItem,
  h2: BlogHeading2,
  h3: BlogHeading3,
  CodeFile,
};
