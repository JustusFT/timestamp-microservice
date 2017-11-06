const moment = require('moment');

module.exports = (str) => {
  const unixTime = moment(str, 'X', true);
  const naturalTime = moment(str, 'MMMMDDYYYY');

  let validTime;

  if (unixTime.isValid()) { validTime = unixTime; }
  if (naturalTime.isValid()) { validTime = naturalTime; }

  if (validTime) {
    return {
      unix: validTime.format('X'),
      natural: validTime.format('MMMM DD, YYYY'),
    };
  }
  return {
    unix: null,
    natural: null,
  };
};
