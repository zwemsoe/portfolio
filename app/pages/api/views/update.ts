import type { NextApiRequest, NextApiResponse } from 'next';
import { BLOGS_COLLECTION, BLOGS_DEV_COLLECTION } from '@/constants';
import { connectToDB } from '@/lib/db';

const collection =
  process.env.NODE_ENV === 'development'
    ? BLOGS_DEV_COLLECTION
    : BLOGS_COLLECTION;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDB();
    const { slug } = req.body;

    let found = await db.collection(collection).findOne({ slug });
    let views;
    if (found) {
      await db
        .collection(collection)
        .updateOne({ slug }, { $inc: { viewCount: 1 } });
      views = found.viewCount + 1;
    } else {
      const doc = { slug, viewCount: 1 };
      await db.collection(collection).insertOne(doc);
      views = 1;
    }
    return res.status(200).json({ success: true, viewCount: views });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Could not update view count',
    });
  }
}
