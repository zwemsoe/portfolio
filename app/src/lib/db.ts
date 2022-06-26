import { MongoClient } from 'mongodb';
import { BLOG_DB } from '@/constants';

export const connectToDB = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URL as string);
  return {
    client,
    db: client.db(BLOG_DB),
  };
};
