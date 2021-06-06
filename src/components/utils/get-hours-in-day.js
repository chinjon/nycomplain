const eachHourOfInterval = require('date-fns').eachHourOfInterval;
const format = require('date-fns').format;

const getHoursInDay = () => {
  const datesObj = eachHourOfInterval({
    start: new Date(2021, 1, 1, 0),
    end: new Date(2021, 1, 1, 23)
  });
  const datesFormatted = [];

  datesObj.forEach((date) => {
    datesFormatted.push(format(date, 'hh:mm:ss'))
  })

  return datesFormatted;
}

export default getHoursInDay;