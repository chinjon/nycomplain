const filterDataByKey = (unfilteredData, filter) => {
  const filteredData = [];
  unfilteredData.forEach((dataPoint) => {
    if (!filteredData.includes(dataPoint[filter].toLowerCase())) {
      filteredData.push(dataPoint[filter].toLowerCase());
    }
  });

  return filteredData;
}

export default filterDataByKey;