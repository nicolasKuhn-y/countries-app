import React, { useState, useEffect } from "react";
import axios from "axios";

import { IconContext } from "react-icons/lib";
import { HiSearch } from "react-icons/hi";

import { Section, Input, Mover, InputBorder } from "./styles";

import { setSearchedCountryAction } from "../../context/countriesActions";

export const SearchBar = ({ dispatch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 3) {
      (async () => {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/name/${encodeURI(search)}`
        );

        dispatch(setSearchedCountryAction(data));
      })();
    } else {
      dispatch(
        setSearchedCountryAction(
          JSON.parse(localStorage.getItem("countryList"))
        )
      );
    }
  }, [dispatch, search]);

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
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </InputBorder>
    </Section>
  );
};
