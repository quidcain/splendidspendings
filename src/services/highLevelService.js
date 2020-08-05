const doInConnection = require('../mongo/doInConnection');

const createUser = async ({
  id,
  timeZone,
  salaryMonthStartDate,
}) => {
  await doInConnection(async db => {
    await db.collection('users').insertOne({
      _id: id,
      timeZone,
      salaryMonthStartDate,
    });
  });
};

const addSpending = async ({
  id,
  day,
  group,
  amount,
}) => {
  await doInConnection(async db => {
    const result = await db.collection('users').updateOne(
      { _id: id },
      {
        $inc: {
          [`spendings.${day}.${group}`]: amount,
        },
      },
    );
    if(!result.matchedCount) {
      throw new Error('Please register yourself!');
    }
  });
};

const getBalance = async ({
  id,
  day,
  group,
}) => {
  return await doInConnection(async db => {
    const cursor = db.collection('users').aggregate([
      /* {
        $match: {
          _id: id,
          date: {
            $and: [
              { $gt: forUser.salaryMonthStartDate },
              { $lte: forDate },
            ],
          },
        },
      },
      {
        $group: {
          _id: null,
          spent: { $sum: '$groups.daily' },
          days: { $sum: 1 },
        },
      }, */
      {
        $group: {
          _id: '$_id',
          count: { $sum: 1 },
        },
      },
    ]);
    const array = await cursor.toArray();
    return array;
  });
};

module.exports = {
  createUser,
  addSpending,
  getBalance,
};

