const doInConnection = require('./doInConnection');

test('doInConnection', async () => {
  try {
    await doInConnection(async db => {
      await db.command({ ping: 1 });
    });
    expect(true).toBe(true);
  } catch(e) {
    console.log(e);
    expect(true).toBe(false);
  }
});
