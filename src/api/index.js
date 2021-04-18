require('dotenv').config()
const fetch = require('node-fetch');
const fs = require('fs');
const searchQuery = `$where=created_date between '2021-02-24T01:00:00' and '2021-02-24T01:01:59'`;

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

/**
 * @description Abstraction for writing data to JSON file
 * @param {Object} data 
 * @param {String} path 
 */
const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

const api = async () => {
  const response = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?${searchQuery}`, {
    method: 'get',
    data: {
      "$limit" : 5000,
      "$$app_token" : `${process.env.APP_TOKEN}`
    }
  });

  const data = await response.json();
  if (typeof window === 'undefined') {
    storeData(data, 'text.json');
  }
  return data;
}

export default api;
