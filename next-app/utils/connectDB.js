import { MongoClient } from 'mongodb';
import { BLOG_DB } from '@/constants';

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  await client.connect();
  return client.db(BLOG_DB);
}

export default connectToMongoDB;
