import Image from 'next/image';
import BlogLink from './Blog/Link';
import BlogParagraph from './Blog/Paragraph';
import { Code } from '@chakra-ui/react';
import { BlogUnorderedList, BlogUnorderedListItem } from './Blog/Lists';
import { BlogHeading2, BlogHeading3 } from './Blog/Headings';

const CodeFile = ({ children }) => {
  return (
    <Code colorScheme="orange" marginTop={5}>
      {children}
    </Code>
  );
};

export default {
  Image,
  a: BlogLink,
  code: Code,
  p: BlogParagraph,
  ul: BlogUnorderedList,
  li: BlogUnorderedListItem,
  h2: BlogHeading2,
  h3: BlogHeading3,
  CodeFile,
};
