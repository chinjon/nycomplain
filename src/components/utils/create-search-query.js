const BASE_API_URL = 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?';
const WHERE_CREATED_DATE = `$where=created_date`;
const BETWEEN = `between`;
const AND = `and`;

const createSearchQuery = (startDate, endDate) => {
  return `${BASE_API_URL}${WHERE_CREATED_DATE} ${BETWEEN} '${startDate}' ${AND} '${endDate}'`;
}

export default createSearchQuery;