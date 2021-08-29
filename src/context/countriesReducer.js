import { types } from "./types";

import { filterByRegion } from "./countriesActions";

export const countriesReducer = (state, { type, payload }) => {
  const { countriesList } = state;

  switch (type) {
    case types.SET_COUNTRY_LIST:
      return { ...state, countriesList: payload, countriesToShow: payload };

    case types.SET_REGION:
      return {
        ...state,
        countriesToShow: filterByRegion(countriesList, payload.regionSelected),
      };

    case types.SET_SEARCHED_COUNTRY:
      return { ...state, countriesToShow: payload };

    default:
      return state;
  }
};
