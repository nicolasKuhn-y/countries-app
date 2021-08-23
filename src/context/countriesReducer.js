import { types } from "./types";

import { filterByRegion, getMatchedCountries } from "./countriesActions";

export const countriesReducer = (state, { type, payload }) => {
  switch (type) {
    case types.setCountryList:
      return { ...state, countriesList: payload, countriesToShow: payload };

    case types.setRegion:
      return { ...state, countriesToShow: filterByRegion(state, payload) };

    case types.setSearchCountry:
      return { ...state, countriesToShow: getMatchedCountries(state, payload) };

    default:
      return state;
  }
};
