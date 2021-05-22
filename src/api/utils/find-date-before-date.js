const daysFn = require('date-fns')

const findDateBeforeDate = (startDate = new Date(), daysBefore = 1) => {
  return daysFn.subDays(startDate, daysBefore);
}

module.exports = findDateBeforeDate;