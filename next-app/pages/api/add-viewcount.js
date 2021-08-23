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

    let found = await req.db.collection(collection).findOne({ slug });
    let views;
    if (found) {
      await req.db
        .collection(collection)
        .updateOne({ slug }, { $inc: { viewCount: 1 } });
      views = found.viewCount + 1;
    } else {
      const doc = { slug, viewCount: 1 };
      await req.db.collection(collection).insertOne(doc);
      views = 1;
    }
    return res.status(200).json({ success: true, viewCount: views });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

export default handler;
