export { BlogViewPage as default } from '@/modules/blog/BlogViewPage';

import { getAllBlogs, getSingleBlog } from '@/lib/mdx';

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
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
