import connectToMongoDB from '@/utils/connectDB';
import { BLOGS_COLLECTION, BLOGS_DEV_COLLECTION } from '@/constants';

const collection =
  process.env.NODE_ENV === 'development'
    ? BLOGS_DEV_COLLECTION
    : BLOGS_COLLECTION;

export default async function handler(req, res) {
  try {
    const db = await connectToMongoDB();
    const { slug } = req.body;
    const found = await db.collection(collection).findOne({ slug });
    return res
      .status(200)
      .json({ success: true, viewCount: found ? found.viewCount : 0 });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}
