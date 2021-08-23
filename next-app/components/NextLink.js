import Link from 'next/link';

export default function NextLink({
  children,
  href,
  onClick,
  color,
  isExternal,
  underline = false,
  style = {},
  ...props
}) {
  const defaultStyle = {
    color: color || 'black',
  };

  return (
    <Link href={href} passHref>
      <a
        onClick={onClick}
        className={underline ? 'next-link-underline' : 'next-link'}
        style={{ ...defaultStyle, ...style }}
        target={isExternal ? '_blank' : '_self'}
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    </Link>
  );
}
