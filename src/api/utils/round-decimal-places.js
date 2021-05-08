/**
 * @description Function for rounding a value to x number of decimal places
 * @param {Number} value 
 * @param {Number} places 
 * @returns {Number}
 */
const roundDecimalPlaces = (value, places) => parseFloat(value.toFixed(places));

export default roundDecimalPlaces;