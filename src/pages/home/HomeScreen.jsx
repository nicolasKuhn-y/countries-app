import React, { useState, useEffect } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useStorage } from "../../hooks/useStorage";

import { CountryGrid } from "../../components/CountryGrid";
import { RegionFilter } from "../../components/RegionFilter";
import { SearchBar } from "../../components/SearchBar";

export const HomeScreen = () => {
  const [region, setRegion] = useStorage("region", "africa");

  const { data, isLoading } = useFetch(
    `https://restcountries.eu/rest/v2/region/${encodeURI(region)}`
  );

  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    setDataToShow(data);
  }, [data]);

  return (
    <>
      <SearchBar setDataToShow={setDataToShow} />
      <RegionFilter setRegion={setRegion} />

      <CountryGrid data={dataToShow} isLoading={isLoading} />
    </>
  );
};
