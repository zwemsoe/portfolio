import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

export const BLOGS_PATH = path.join(process.cwd(), 'mdx/blogs');

export const getMDXFile = (fileName: string) => {
  return fs.readFileSync(path.join(BLOGS_PATH, fileName), 'utf-8');
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

export const getSingleBlog = async (slug: string) => {
  const source = getMDXFile(slug + '.mdx');

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: BLOGS_PATH,
    mdxOptions(options: any, frontmatter) {
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
