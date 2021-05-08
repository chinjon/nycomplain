const createCoordinatesFromArray = (dataArray) => {
  const coordinates = [];
  dataArray.forEach((data) => {
    if (data.latitude && data.longitude) {
      coordinates.push({latitude: data.latitude, longitude: data.longitude});
    }
  });
  return coordinates;
}

export default createCoordinatesFromArray;