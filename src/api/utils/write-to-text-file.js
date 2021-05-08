const fs = require('fs');

/**
 * @description Abstraction for writing data to JSON file
 * @param {Object} data 
 * @param {String} path 
 */
const writeToTextFile = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data))
  } catch (err) {
    console.error(err)
  }
}

module.exports = writeToTextFile;