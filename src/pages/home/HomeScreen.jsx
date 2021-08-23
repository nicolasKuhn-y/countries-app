import React, { useContext, useEffect } from "react";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";

import { CountriesContext } from "../../context/CountriesContext";
import { types } from "../../context/types";

export const HomeScreen = () => {
  const {
    countries: { countriesList, countriesToShow },
    dispatch,
  } = useContext(CountriesContext);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://restcountries.eu/rest/v2/all");

      const data = await res.json();

      dispatch({
        type: types.setCountryList,
        payload: data,
      });
    })();
  }, [dispatch]);

  console.log(countriesToShow)

  return (
    <>
      <SearchBar dispatch={dispatch} />
      <RegionFilter dispatch={dispatch} />

      <CountryGrid countries={countriesToShow} />
    </>
  );
};
