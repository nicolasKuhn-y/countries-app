import React, { useContext, useEffect } from "react";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";
import { Spinner } from "../../components/Spinner";

import { setCountryListAction } from "../../context/countriesActions";
import { CountriesContext } from "../../context/CountriesContext";

import { useAxios } from "../../hooks/useAxios";

export const HomeScreen = () => {
  const [countries, dispatch] = useContext(CountriesContext);
  const { data, isLoading } = useAxios("https://restcountries.eu/rest/v2/all");

  const { countriesToShow } = countries;

  const areCountriesInStorage =
    localStorage.getItem("countryList") in localStorage;

  useEffect(() => {
    if (!areCountriesInStorage && data !== null) {
      dispatch(setCountryListAction(data));

      localStorage.setItem("countryList", JSON.stringify(data));
    }
  }, [data, dispatch, areCountriesInStorage]);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SearchBar dispatch={dispatch} />
          <RegionFilter dispatch={dispatch} />
          <CountryGrid countries={countriesToShow} />
        </>
      )}
    </>
  );
};
