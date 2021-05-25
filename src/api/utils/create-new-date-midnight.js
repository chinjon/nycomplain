const createNewDateMidnight = (date = new Date()) => {
  return new Date(new Date(date).setHours(0,0,0,0));
}