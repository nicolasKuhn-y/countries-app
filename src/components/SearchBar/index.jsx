import React, { memo, useState } from "react";

import { IconContext } from "react-icons/lib";
import { HiSearch } from "react-icons/hi";

import { Section, Input, Mover, InputBorder } from "./styles";
import { types } from "../../context/types";

export const SearchBar = memo(({ dispatch }) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);

    dispatch({
      type: types.setSearchCountry,
      payload: { search },
    });
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
          value={search}
          onChange={handleChange}
        />
      </InputBorder>
    </Section>
  );
});
