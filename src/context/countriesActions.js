export const getMatchedCountries = (state, payload) =>
  state.countriesList.filter(({ name }) =>
    name.toLowerCase().includes(payload.search.toLowerCase())
  );

export const filterByRegion = (state, payload) =>
  state.countriesList.filter(({ region }) => region === payload.regionSelected);
