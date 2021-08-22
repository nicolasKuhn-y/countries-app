import React, { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";

export const HomeScreen = () => {
  const [country, setCountry] = useState("");

  const { data, isLoading } = useFetch(
    `https://restcountries.eu/rest/v2/region/${encodeURI(country)}`
  );

  return (
    <>
      <SearchBar />
      <RegionFilter setCountry={setCountry} />

      <CountryGrid data={data} isLoading={isLoading} />
    </>
  );
};
