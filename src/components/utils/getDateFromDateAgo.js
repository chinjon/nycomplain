const getDateFromDateAgo = (daysAgo) => {
  let d = new Date();
  return new Date(d.setDate(d.getDate() - daysAgo));
}

export default getDateFromDateAgo;
