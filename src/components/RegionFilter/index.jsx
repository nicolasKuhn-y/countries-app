import React from "react";

import { RegionOption } from "../RegionOption";

import { Container } from "../../css/components";
import { SelectBorder, Select } from "./styles";
import { types } from "../../context/types";

export const RegionFilter = ({ dispatch }) => {
  const handleChange = ({ target }) => {
    const regionSelected = target.value;

    dispatch({
      type: types.SET_REGION,
      payload: { regionSelected },
    });
  };

  return (
    <Container>
      <SelectBorder>
        <Select as="select" onChange={handleChange}>
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
};
