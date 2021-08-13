import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_CONTACTS_DB_ID;

export default async function handler(req, res) {
  const { email, name, subject, message } = req.body;

  try {
    await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Email: {
          title: [
            {
              type: 'text',
              text: {
                content: email,
              },
            },
          ],
        },
        Name: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: name,
              },
            },
          ],
        },
        Subject: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: message,
              },
            },
          ],
        },
        'Sent At': {
          date: { start: new Date().toISOString().split('T')[0] },
        },
      },
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(err.status || 400).json({
      success: false,
      code: err.code,
      error: err.message,
    });
  }
}
