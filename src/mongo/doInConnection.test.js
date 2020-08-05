const doInConnection = require('./doInConnection');

test('doInConnection', async () => {
  const promise = doInConnection(async db => {
    return await db.command({ ping: 1 });
  });
  return expect(promise).resolves.toEqual({ ok: 1 });
});
