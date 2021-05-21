require('dotenv').config()
const fetch = require('node-fetch');
const writeToTextFile = require('./utils/write-to-text-file.js')

const api = async (query) => {
  const response = await fetch(query, {
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
