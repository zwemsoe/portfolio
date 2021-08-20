import Link from 'next/link';
import { Code } from '@chakra-ui/react';

export default function BlogLink(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} style={{ color: 'blue' }}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      style={{ color: '#64C9CF' }}
    />
  );
}
