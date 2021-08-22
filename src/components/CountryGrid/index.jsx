import React from "react";
import { CountryCard } from "../CountryCard";

import { Grid } from "./styles";

export const CountryGrid = ({ data, isLoading }) => {
  const countriesData = data;

  console.log(countriesData);

  return (
    <Grid>
      {!isLoading &&
        countriesData.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
    </Grid>
  );
};
