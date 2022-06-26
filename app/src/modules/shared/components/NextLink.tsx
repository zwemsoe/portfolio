import Link from 'next/link';
import React from 'react';

interface INextLink {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
  color?: string;
  isExternal?: boolean;
  underline?: boolean;
  style?: any;
}

export const NextLink = ({
  children,
  href,
  onClick,
  color,
  isExternal,
  underline = false,
  style = {},
  ...props
}: INextLink) => {
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
};
