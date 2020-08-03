const doInConnection = require('./utils/mongo/doInConnection');

doInConnection(async db => {
  db.collection('users').insertOne({
    id: 71892087,
    budget: 20,
    salaryMonth: 20,
  });
});
