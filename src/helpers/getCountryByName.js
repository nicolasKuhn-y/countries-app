export const getCountryByName = (_name, countriesList) =>
  countriesList.find(({ name }) => name === _name);
