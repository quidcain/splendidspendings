

const { DateTime } = require('luxon');

const parseDate = (msFromUnixEpoch, timeZone) => {
  const dateTimeInParticularTimeZone = DateTime.fromMillis(
    msFromUnixEpoch * 1000,
    { zone: timeZone },
  );
  return dateTimeInParticularTimeZone.toISODate();
};

module.exports = {
  parseDate,
};
