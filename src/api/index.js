require('dotenv').config()
const axios = require('axios');
const fs =require('fs')


const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

const searchQuery = `$where=created_date between '2021-02-24T01:00:00' and '2021-02-24T01:01:59'`;
const api = () => new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?${searchQuery}`,
      data: {
        "$limit" : 5000,
        "$$app_token" : `${process.env.APP_TOKEN}`
      }
    })
      .then(function (response) {
        if (typeof window === 'undefined') {
          storeData(response.data, 'text.json')
        }
        resolve(response.data);
      });
  })

export default api;
