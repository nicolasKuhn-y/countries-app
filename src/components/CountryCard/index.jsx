import React from "react";

import { Card, CardContent } from "./styles";

import { CardInfo } from "../CardInfo";

export const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <Card>
      <img src={flag} alt={name} />

      <CardContent>
        <h3>{name}</h3>

        <CardInfo title="Population" data={population} />
        <CardInfo title="Region" data={region} />
        <CardInfo title="Capital" data={capital} />
      </CardContent>
    </Card>
  );
};
