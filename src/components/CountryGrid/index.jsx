import React from "react";
import { CountryCard } from "../CountryCard";

import { Grid } from "./styles";

export const CountryGrid = ({ countries }) => (
  <Grid>
    {countries.map((country) => (
      <CountryCard key={country.name} {...country} />
    ))}
  </Grid>
);
