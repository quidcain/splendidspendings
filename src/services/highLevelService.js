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
      spendings: [],
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
      {
        _id: id,
      },
      {
        $inc: {
          [`spendings.$[element].groups.${group}`]: amount,
        },
      },
      {
        arrayFilters: [{ 'element.date': day }],
        upsert: true,
      },
    );
    console.log(result);
    if(!result.matchedCount) {
      throw new Error('Please register yourself!');
    }
    if(!result.modifiedCount) {
      await db.collection('users').updateOne(
        {
          _id: id,
        },
        {
          $addToSet: {
            spendings: {
              date: day,
              groups: {
                [group]: amount,
              },
            },
          },
        },
      );
    }
  });
};

const getBalance = async ({
  id,
  day,
  group,
}) => {
  return await doInConnection(async db => {
    // find date gt salaryMonthStartDate and lte day
    // $sum values
    // $count days
    const cursor = db.collection('users').aggregate([
      {
        $match: {
          _id: id,
          [`spendings.${group}`]: {
            $lt: '2010-7-20',
          },
          /* date: {
            $and: [
              { $gt: forUser.salaryMonthStartDate },
              { $lte: forDate },
            ],
          }, */
          /* date: {
            $lt: '2010-7-20',
          }, */
        },
      },
      /* {
        $group: {
          _id: null,
          spent: { $sum: '$groups.daily' },
          days: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id',
          count: { $sum: 1 },
        },
      }, */
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

