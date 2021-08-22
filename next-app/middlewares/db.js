import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';
import { BLOG_DB } from '@/constants';

const client = new MongoClient(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function db(req, res, next) {
  await client.connect();
  req.dbClient = client;
  req.db = client.db(BLOG_DB);
  return next();
}

const middleware = nextConnect();

middleware.use(db);

export default middleware;
