const highLevelService = require('./highLevelService');

const id = 'some-random-id';

describe('highLevelService', () => {
  test('createUser', async () => {
    try {
      await highLevelService.createUser({
        id,
        timeZone: 'UTC+3',
        salaryMonthStartDate: '2020-07-20',
      });
    } catch(e) {
      console.log(e);
    }
  });

  test('addSpending 7 to daily', async () => {
    try {
      const result = await highLevelService.addSpending({
        id,
        day: '2020-08-20',
        group: 'daily',
        amount: 7,
      });
      console.log(result);
    } catch(e) {
      console.log(e);
    }
  });
  test('addSpending 35 to haircut', async () => {
    try {
      const result = await highLevelService.addSpending({
        id,
        day: '2020-08-20',
        group: 'haircut',
        amount: 35,
      });
      console.log(result);
    } catch(e) {
      console.log(e);
    }
  });

  test('getBalance', async () => {
    try {
      const result = await highLevelService.getBalance({
        id,
        day: '2020-08-20',
        group: 'daily',
      });
      console.log(result);
    } catch(e) {
      console.log(e);
    }
  });
});
