import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_TECH_BLOG_DB_ID;

export default async function handler(req, res) {
  console.log(databaseId);
  const db = await notion.databases.query({
    database_id: databaseId,
  });
  const page = await notion.blocks.children.list({
    block_id: '2fe94e09-d44c-403a-a68e-69c19e975da2',
    page_size: 50,
  });
  res.status(200).json({ success: true, page, db });
}
