import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_TECH_BLOG_DB_ID;

export default async function handler(req, res) {
  try {
    const db = await notion.databases.query({
      database_id: databaseId,
      page_size: 50,
      sorts: [
        {
          property: 'Created',
          direction: 'descending',
        },
      ],
    });

    let blogs = [];

    for (let blog of db.results) {
      const { id, last_edited_time, properties } = blog;

      blogs.push({
        id,
        last_edited_time,
        created_time: properties.Created.date.start,
        title: properties.Blog.title[0].text.content,
        type: properties.Type.multi_select,
        tags: properties.Tags.multi_select,
        image: properties.Image.url,
      });
    }
    return res.status(200).json({ success: true, blogs });
  } catch (err) {
    return res.status(err.status || 400).json({
      success: false,
      code: err.code,
      error: err.message,
    });
  }
}
