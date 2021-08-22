import React from "react";

import { RegionOption } from "../RegionOption";

import { Container } from "../../css/components";
import { SelectBorder, Select } from "./styles";

export const RegionFilter = () => {
  return (
    <Container>
      <SelectBorder>
        <Select as="select">
          <RegionOption defaultValue name="Filter by Region" />

          <RegionOption name="Africa" />

          <RegionOption name="America" />

          <RegionOption name="Asia" />

          <RegionOption name="Europe" />

          <RegionOption name="Oceania" />
        </Select>
      </SelectBorder>
    </Container>
  );
};
