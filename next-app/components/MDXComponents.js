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

<Image
  alt={`My LinkedIn Bio`}
  src={`/images/blog/theoffice.jpeg`}
  width={1468}
  height={558}
  priority
/>;

const CustomImage = ({ src, width = 1000, height = 400, alt = '' }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <Image alt={alt} src={src} width={width} height={height} priority />
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
