const daysFn = require('date-fns')

const findDateBeforeToday = (daysBefore = 1) => {
  return daysFn.subDays(new Date(), daysBefore);
}

module.exports = findDateBeforeToday;