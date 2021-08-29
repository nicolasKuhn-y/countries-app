import React, { useContext, useEffect } from "react";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";
import { Spinner } from "../../components/Spinner";

import { CountriesContext } from "../../context/CountriesContext";

import { types } from "../../context/types";
import { useAxios } from "../../hooks/useAxios";

export const HomeScreen = () => {
  const [countries, dispatch] = useContext(CountriesContext);
  const { data, isLoading } = useAxios("https://restcountries.eu/rest/v2/all");

  const { countriesToShow } = countries;

  useEffect(() => {
    if (!(localStorage.getItem("countryList") in localStorage)) {
      if (data !== null) {
        dispatch({
          type: types.SET_COUNTRY_LIST,
          payload: data,
        });

        localStorage.setItem("countryList", JSON.stringify(data));
      }
    }
  }, [data, dispatch]);

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
