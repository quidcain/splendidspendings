const { MongoClient } = require('mongodb');

const {
  MONGO_HOSTNAME = '127.0.0.1',
  MONGO_PORT = 27017,
} = process.env;
const uri = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}`;
const dbName = 'ss';

const doInConnection = async action => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    return await action(db);
  } finally {
    await client.close();
  }
};

module.exports = doInConnection;
