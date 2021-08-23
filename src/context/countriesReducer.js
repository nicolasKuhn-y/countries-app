import { types } from "./types";

export const countriesReducer = (state, { type, payload }) => {
  switch (type) {
    case types.setCountryList:
      return { ...state, countriesList: payload, countriesToShow: payload };

    case types.setRegion:
      const filteredByRegion = state.countriesList.filter(
        ({ region }) => region === payload.regionSelected
      );

      return { ...state, countriesToShow: filteredByRegion };
    case types.setSearchCountry:
      const matchedCountries = state.countriesList.filter(({ name }) =>
        name.toLowerCase().includes(payload.search.toLowerCase())
      );

      console.log(matchedCountries);

      return { ...state, countriesToShow: matchedCountries };

    default:
      return state;
  }
};
