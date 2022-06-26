import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import { BlogContainer, MDXComponents as Components } from './components';
import { IFrontmatter } from './interfaces';

interface IBlog {
  code: any;
  frontmatter: IFrontmatter;
  read_time: string;
  slug: string;
}

export const BlogViewPage = ({ code, frontmatter, read_time, slug }: IBlog) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <BlogContainer frontmatter={frontmatter} read_time={read_time} slug={slug}>
      {/* @ts-ignore */}
      <MDXComponent components={{ ...Components }} />
    </BlogContainer>
  );
};
