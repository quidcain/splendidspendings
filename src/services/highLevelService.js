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

module.exports = {
  createUser,
  addSpending,
};

