import { MongoClient } from 'mongodb';
import { BLOG_DB } from '@/constants';

const MONGODB_URL = process.env.MONGODB_URL;

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
  cached = global.mongo = { conn: null, promise: null };
}

export default async function db() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = MongoClient.connect(MONGODB_URL, opts).then((client) => {
      return {
        client,
        db: client.db(BLOG_DB),
      };
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
