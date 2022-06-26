import React from 'react';
import { NextLink } from '@/modules/shared/components';

export const BlogLink = ({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} color="light" {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <NextLink href={href} color="#64C9CF" isExternal {...props}>
      {children}
    </NextLink>
  );
};
