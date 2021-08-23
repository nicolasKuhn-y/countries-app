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
    case types.setCountry:
      return;

    default:
      return state;
  }
};
