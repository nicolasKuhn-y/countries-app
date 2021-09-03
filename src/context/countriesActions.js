import { types } from "./types";

export const setSearchedCountryAction = (payloadData) => ({
  type: types.SET_SEARCHED_COUNTRY,
  payload: payloadData,
});

export const setCountryListAction = (payloadData) => ({
  type: types.SET_COUNTRY_LIST,
  payload: payloadData,
});

export const setRegionAction = (payloadData) => ({
  type: types.SET_REGION,
  payload: payloadData,
});