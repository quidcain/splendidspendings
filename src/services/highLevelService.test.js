const highLevelService = require('./highLevelService');

test('createUser', async () => {
  try {
    await highLevelService.createUser({
      id: 71892087,
      timeZone: 'UTC+3',
      salaryMonthStartDate: '2020-07-20',
    });
  } catch(e) {
    console.log(e);
  }
});

