import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { getAllBlogs, getSingleBlog } from '@/lib/mdx';
import Components from '@/components/MDXComponents';
import BlogContainer from '@/components/BlogContainer';

const Blog = ({ code, frontmatter, read_time, slug }) => {
  const MDXComponent = useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogContainer frontmatter={frontmatter} read_time={read_time} slug={slug}>
      <MDXComponent components={{ ...Components }} />
    </BlogContainer>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getSingleBlog(params.slug);
  return {
    props: { ...blog, slug: params.slug },
  };
};

export const getStaticPaths = async () => {
  const blogs = getAllBlogs();
  return {
    paths: blogs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export default Blog;
