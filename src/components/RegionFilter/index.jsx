import React from "react";

import { RegionOption } from "../RegionOption";

import { Container } from "../../css/components";
import { SelectBorder, Select } from "./styles";

export const RegionFilter = ({ setCountry }) => (
  <Container>
    <SelectBorder>
      <Select as="select" onChange={({ target }) => setCountry(target.value)}>
        <option disabled defaultValue>Filter by Region</option>

        <RegionOption value="africa" />

        <RegionOption value="americas" />

        <RegionOption value="asia" />

        <RegionOption value="europe" />

        <RegionOption value="oceania" />
      </Select>
    </SelectBorder>
  </Container>
);
