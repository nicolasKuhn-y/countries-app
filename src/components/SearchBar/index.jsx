import React, { useState, useEffect } from "react";

import { IconContext } from "react-icons/lib";
import { HiSearch } from "react-icons/hi";

import { Section, Input, Mover, InputBorder } from "./styles";
import { types } from "../../context/types";
import axios from "axios";

export const SearchBar = ({ dispatch }) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  useEffect(() => {
    if (search.length > 5) {
      (async () => {
        const { data } = await axios.get(
          `https://restcountries.eu/rest/v2/name/${encodeURI(search)}`
        );

        dispatch({
          type: types.SET_SEARCHED_COUNTRY,
          payload: data,
        });
      })();
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
          onChange={handleChange}
        />
      </InputBorder>
    </Section>
  );
};
