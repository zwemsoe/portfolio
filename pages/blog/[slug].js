import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import BlogContainer from '@/components/BlogContainer';
import Components from '@/components/MDXComponents';
import { getAllBlogs, getSingleBlog } from '@/lib/mdx';

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
