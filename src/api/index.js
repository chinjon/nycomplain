require('dotenv').config()
const fetch = require('node-fetch');
const writeToTextFile = require('./utils/write-to-text-file.js')
const BASE_API_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?';
const WHERE_CREATED_DATE = `$where=created_date`
const BETWEEN = `between`
const searchQuery = `${WHERE_CREATED_DATE} ${BETWEEN} '2021-04-20T17:00:00' and '2021-04-20T17:45:00'`;

const api = async () => {
  const response = await fetch(`${BASE_API_URL}${searchQuery}`, {
    method: 'get',
    data: {
      "$limit" : 5000,
      "$$app_token" : `${process.env.APP_TOKEN}`
    }
  });

  const data = await response.json();
  if (typeof window === 'undefined') {
    writeToTextFile(data, 'text.json');
  }

  return data;
}

export default api;
