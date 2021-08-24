import React, { useContext, useEffect } from "react";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";

import { CountriesContext } from "../../context/CountriesContext";

import { getCountries } from "../../helpers/getCountries";

export const HomeScreen = () => {
  const {
    countries: { countriesToShow },
    dispatch,
  } = useContext(CountriesContext);

  useEffect(() => {
    if (!(localStorage.getItem("countryList") in localStorage))
      getCountries("https://restcountries.eu/rest/v2/all", dispatch);
  }, [dispatch]);

  return (
    <>
      <SearchBar dispatch={dispatch} />
      <RegionFilter dispatch={dispatch} />

      <CountryGrid countries={countriesToShow} />
    </>
  );
};
