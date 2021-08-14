import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_TECH_BLOG_DB_ID;

/***
 * Blog info
 *  last_edited_time
 *  id
 *  type -> properties.Type.muti_select
 *  tags -> properties.Tags.muti_select
 *  created_time -> properties.Created.date.start
 *  title -> properties.Blog.title.text.content
 * content: [
 * {
 *  type: 'gist',
 *  id: String,
 *  filename: String
 * }
 *
 * {
 *  type: Type,
 *  text: [
 *    {
 *      text: String,
 *      href: String
 *      annotations: String
 *    }
 *  ]
 * }
 * {
 *  type: image,
 *  url: String
 * }
 * ]
 *
 */

const extractText = (block) => {
  let text = [];
  if (
    block.type === 'paragraph' ||
    block.type === 'heading_1' ||
    block.type === 'heading_2' ||
    block.type === 'heading_3' ||
    block.type === 'bulleted_list_item'
  ) {
    console.log(block.type);
    block[block.type].text.forEach(({ plain_text, href, annotations }) => {
      text.push({ text: plain_text, link: href, annotations });
    });
  }
  return text;
};

const extractGists = async (blockId) => {
  const block = await notion.blocks.children.list({
    block_id: blockId,
  });
  let gists = [];
  for (const gist of block.results) {
    const [id, filename] = gist.paragraph.text[0].text.content.split(',');
    gists.push({
      type: 'gist',
      id,
      filename,
    });
  }
  return gists;
};

const extractContent = async (blocks) => {
  let content = [];
  for (const block of blocks) {
    if (block.type === 'toggle') {
      const gists = await extractGists(block.id);
      content.concat(gists);
    } else if (block.image) {
      content.push({
        type: 'image',
        url: block.image.url,
      });
    } else {
      const text = extractText(block);
      content.push({
        type: block.type,
        text,
      });
    }
  }
  return content;
};

export default async function handler(req, res) {
  try {
    const title = decodeURIComponent(req.query.title);

    const db = await notion.databases.query({
      database_id: databaseId,
      page_size: 1,
      filter: {
        property: 'Blog',
        text: {
          equals: title,
        },
      },
    });

    let blog;
    if (db.results.length > 0) {
      const { id, last_edited_time, properties } = db.results[0];

      const page = await notion.blocks.children.list({
        block_id: id,
      });
      const content = await extractContent(page.results);

      blog = {
        id,
        last_edited_time,
        created_time: properties.Created.date.start,
        title: properties.Blog.title[0].text.content,
        type: properties.Type.multi_select,
        tags: properties.Tags.multi_select,
        content,
      };
    }
    return res.status(200).json({ success: true, blog });
  } catch (err) {
    return res.status(err.status || 400).json({
      success: false,
      code: err.code,
      error: err.message,
    });
  }
}
