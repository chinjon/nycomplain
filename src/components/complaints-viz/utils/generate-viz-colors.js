import generateRandomRgba from './generate-random-rbg';

const generateVizColors = (data) => {
  const vizColorsArray = [];
  data.forEach(item => {
    vizColorsArray.push(generateRandomRgba());
  });
  return vizColorsArray;
}

export default generateVizColors;