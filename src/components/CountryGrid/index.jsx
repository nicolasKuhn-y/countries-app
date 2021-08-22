import React from "react";
import { CountryCard } from "../CountryCard";

import { Grid } from "./styles";

export const CountryGrid = ({ data }) => {
  return (
    <Grid>
      {data !== null &&
        data.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
    </Grid>
  );
};
