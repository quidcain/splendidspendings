const highLevelService = require('./highLevelService');
const doInConnection = require('../mongo/doInConnection');

const id = 'some-random-id';

describe('highLevelService', () => {
  test('createUser', async () => {
    const timeZone = 'UTC+3';
    const salaryMonthStartDate = '2020-07-20';
    try {
      await highLevelService.createUser({
        id,
        timeZone,
        salaryMonthStartDate,
      });
    } catch(e) {
      console.log(e);
    }
    const user = await doInConnection(async db => {
      return await db.collection('users').findOne({
        _id: id,
      });
    });
    expect(user).toEqual({
      _id: id,
      timeZone,
      salaryMonthStartDate,
    });
  });

  test('addSpending 7 to daily', async () => {
    try {
      await highLevelService.addSpending({
        id,
        day: '2020-08-20',
        group: 'daily',
        amount: 7,
      });
      const user = await doInConnection(async db => {
        return await db.collection('users').findOne({
          _id: id,
        });
      });
      expect(user.spendings).toEqual({
        '2020-08-20': {
          daily: 7,
        },
      });
    } catch(e) {
      console.log(e);
    }
  });
  test('addSpending 35 to haircut', async () => {
    try {
      await highLevelService.addSpending({
        id,
        day: '2020-08-20',
        group: 'haircut',
        amount: 35,
      });
      const user = await doInConnection(async db => {
        return await db.collection('users').findOne({
          _id: id,
        });
      });
      expect(user.spendings).toEqual({
        '2020-08-20': {
          daily: 7,
          haircut: 35,
        },
      });
    } catch(e) {
      console.log(e);
    }
  });
});
