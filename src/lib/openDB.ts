import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://tiktok:tiktok@cluster0.5cka3.mongodb.net/tiktokclone?retryWrites=true&w=majority";

export async function openDB() {
  const client = new MongoClient(uri);
  await client.connect();

  return client.db("tiktokclone");
}
