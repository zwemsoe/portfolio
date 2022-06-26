export { BlogPage as default } from '@/modules/blog/BlogPage';

import { getAllBlogs } from '@/lib/mdx';

export const getStaticProps = async () => {
  const blogs = getAllBlogs();
  return {
    props: { blogs },
  };
};
