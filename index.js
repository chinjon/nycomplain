require('dotenv').config()
const axios = require('axios')

const searchQuery = `$where=created_date between '2017-12-31T20:00:00' and '2017-12-31T23:59:59'`;

axios({
  method: 'get',
  url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?${searchQuery}`,
  data: {
    "$limit" : 5000,
    "$$app_token" : `${process.env.APP_TOKEN}`
  }
})
  .then(function (response) {
    console.log(response)
  });