import React, { useState, memo } from "react";

import { IconContext } from "react-icons/lib";
import { HiSearch } from "react-icons/hi";

import { Section, Input, Mover, InputBorder } from "./styles";
import { useFetch } from "../../hooks/useFetch";

export const SearchBar = memo(({ setDataToShow }) => {
  const [country, setCountry] = useState("");

  const { data, isLoading } = useFetch(
    `https://restcountries.eu/rest/v2/name/${encodeURI(country)}`
  );

  console.log(data);

  const handleChange = (e) => {
    setCountry(e.target.value);

    if (!isLoading) setDataToShow(data);
  };

  return (
    <Section>
      <Mover>
        <IconContext.Provider value={{ size: "1.3rem" }}>
          <HiSearch />
        </IconContext.Provider>
      </Mover>

      <InputBorder>
        <Input
          autoComplete="no"
          placeholder="Search for a country..."
          onChange={handleChange}
        />
      </InputBorder>
    </Section>
  );
});
