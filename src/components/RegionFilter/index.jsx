import React from "react";

import { RegionOption } from "../RegionOption";

import { Container } from "../../css/components";
import { SelectBorder, Select } from "./styles";

import { setRegionAction } from "../../context/countriesActions";

export const RegionFilter = ({ dispatch }) => (
  <Container>
    <SelectBorder>
      <Select
        as="select"
        onChange={(e) => dispatch(setRegionAction(e.target.value))}
      >
        <option disabled defaultValue>
          Filter by Region
        </option>

        <RegionOption value="Africa" />

        <RegionOption value="Americas" />

        <RegionOption value="Asia" />

        <RegionOption value="Europe" />

        <RegionOption value="Oceania" />
      </Select>
    </SelectBorder>
  </Container>
);
