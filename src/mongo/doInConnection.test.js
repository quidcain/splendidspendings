const doInConnection = require('./doInConnection');

test('connected to mongo', async () => {
  try {
    await doInConnection(async db => {
      await db.collection('users').insertOne({
        id: 71892087,
        budget: 20,
        salaryMonth: 20,
      });
    });
    expect(true).toBe(true);
  } catch(e) {
    expect(true).toBe(false);
  }
});
