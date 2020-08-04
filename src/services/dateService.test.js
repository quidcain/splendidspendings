const dateService = require('./dateService');


describe('parseDate', () => {
  test('2020-08-02T21:00:00 is 2020-08-03 in UTC+3', () => {
    expect(
      dateService.parseDate(
        1596402000, // 2020-08-03 00:00 utc+3
        'UTC+3',
      ),
    ).toEqual('2020-08-03');
  });
});
