const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'ss';

const doInConnection = async action => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db(dbName);
    // await db.command({ ping: 1 });
    await action(db);
  } catch(e) {
    console.dir(e);
  } finally {
    await client.close();
  }
};

module.exports = doInConnection;
