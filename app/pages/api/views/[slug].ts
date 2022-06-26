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
    const { slug } = req.query;
    const found = await db.collection(collection).findOne({ slug });
    return res
      .status(200)
      .json({ success: true, viewCount: found ? found.viewCount : 0 });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Could not fetch view count.',
    });
  }
}
