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

module.exports = {
  createUser,
};

