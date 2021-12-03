import { Code } from '@chakra-ui/react';
import Image from 'next/image';
import { BlogHeading2, BlogHeading3 } from './Blog/Headings';
import BlogLink from './Blog/Link';
import { BlogUnorderedList, BlogUnorderedListItem } from './Blog/Lists';
import BlogParagraph from './Blog/Paragraph';

const CodeFile = ({ children }) => {
  return (
    <Code colorScheme="orange" marginTop={5}>
      {children}
    </Code>
  );
};

const CustomImage = ({
  src,
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

export default {
  CustomImage,
  a: BlogLink,
  code: Code,
  p: BlogParagraph,
  ul: BlogUnorderedList,
  li: BlogUnorderedListItem,
  h2: BlogHeading2,
  h3: BlogHeading3,
  CodeFile,
};
