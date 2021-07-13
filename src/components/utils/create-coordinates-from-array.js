/**
 * @description Function to create an array of objects with coordinates 
 * mapped to the "latitude" and "longitude" keys
 * @param {Array} dataArray 
 * @returns {Array}
 */
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