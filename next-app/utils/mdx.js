import fs from 'fs';
import path from 'path';
// import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import rehypePrism from 'rehype-prism-plus';
import readingTime from 'reading-time';

export const BLOGS_PATH = path.join(process.cwd(), 'mdx/blogs');

export const getMDXFile = (fileName) => {
  return fs.readFileSync(path.join(BLOGS_PATH, fileName));
};

export const getAllBlogs = async () => {
  return fs.readdirSync(BLOGS_PATH);
};

export const getSingleBlog = async (slug) => {
  const source = getMDXFile(slug + '.mdx');

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: BLOGS_PATH,
    xdmOptions(options) {
      options.rehypePlugins = [...(options?.rehypePlugins ?? []), rehypePrism];
      return options;
    },
  });

  const read_time = readingTime(code);

  return {
    frontmatter,
    code,
    read_time: read_time.text,
  };
};
