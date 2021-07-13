/**
 * @description Function for creating a map with count values 
 * for labels and data
 * @param {Object} dataCount 
 * @returns {Object}
 */
const createFormattedChartData = (dataCount) => {
  const labels = [];
  const data = [];
  console.log('dataCount', dataCount)
  for (const count in dataCount) {
    labels.push(count)
    data.push(dataCount[count])
  }

  return {
    labels: labels,
    data: data
  }
}

export default createFormattedChartData