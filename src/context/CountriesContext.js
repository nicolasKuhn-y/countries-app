import React, { createContext, useReducer } from "react";

import { countriesReducer } from "./countriesReducer";

export const CountriesContext = createContext();

const initialState = {
  countriesList: JSON.parse(localStorage.getItem("countryList")) || [],
  countriesToShow: JSON.parse(localStorage.getItem("countryList")) || [],
};

export const CountriesProvider = ({ children }) => (
  <CountriesContext.Provider value={useReducer(countriesReducer, initialState)}>
    {children}
  </CountriesContext.Provider>
);
