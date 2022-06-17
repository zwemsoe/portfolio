import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';

export const BLOGS_PATH = path.join(process.cwd(), 'mdx/blogs');

export const getMDXFile = (fileName) => {
  return fs.readFileSync(path.join(BLOGS_PATH, fileName));
};

export const getAllBlogs = () => {
  return fs
    .readdirSync(BLOGS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getMDXFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, '');
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getSingleBlog = async (slug) => {
  const source = getMDXFile(slug + '.mdx');

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: BLOGS_PATH,
    xdmOptions(options) {
      options.rehypePlugins = [
        ...(options?.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ];
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
