const eachHourOfInterval = require('date-fns').eachHourOfInterval;

const getHoursInDay = () => {
  return eachHourOfInterval({
    start: new Date(2021, 1, 1, 0),
    end: new Date(2021, 1, 1, 23)
  })
}


console.log(getHoursInDay())
// export default getHoursInDay;