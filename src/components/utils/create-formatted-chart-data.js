const createFormattedChartData = (dataCount) => {
  const labels = [];
  const data = [];

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