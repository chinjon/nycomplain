const countPropsByKey = (dataObj, prop) => {
  const countMap = {};

  for(let i = 0; i < dataObj.length; i++) {
    let filterBy = dataObj[i][prop];
    if(countMap[filterBy]) {
      countMap[filterBy]++; 
    } else {
      countMap[filterBy] = 1;
    }
  }
  return countMap;
}

export default countPropsByKey;