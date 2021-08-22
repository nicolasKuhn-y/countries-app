import React from "react";

import { IconContext } from "react-icons/lib";
import { HiSearch } from "react-icons/hi";

import { Section, Input, Mover, InputBorder } from "./styles";

export const SearchBar = () => {
  return (
    <Section>
      <Mover>
        <IconContext.Provider value={{ size: "1.3rem" }}>
          <HiSearch />
        </IconContext.Provider>
      </Mover>

      <InputBorder>
        <Input autoComplete="no" placeholder="Search for a country..." />
      </InputBorder>
    </Section>
  );
};
