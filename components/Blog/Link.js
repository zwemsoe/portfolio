import NextLink from '../NextLink';

export default function BlogLink(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} color="light" {...props}>
        {props.children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} color="#64C9CF" isExternal {...props}>
      {props.children}
    </NextLink>
  );
}
