import nextConnect from 'next-connect';
import connectDB from '@/middlewares/db';
import { BLOGS_COLLECTION, BLOGS_DEV_COLLECTION } from '@/constants';

const collection =
  process.env.NODE_ENV === 'development'
    ? BLOGS_DEV_COLLECTION
    : BLOGS_COLLECTION;

const handler = nextConnect();

handler.use(connectDB);

handler.post(async (req, res) => {
  try {
    const { slug } = req.body;
    const found = await req.db.collection(collection).findOne({ slug });
    return res.status(200).json({ success: true, viewCount: found.viewCount });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default handler;
