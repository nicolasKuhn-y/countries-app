import React from "react";

import { Card, CardContent, StyledLink } from "./styles";

import { CardInfo } from "../CardInfo";

import { formatPopulation } from "../../helpers/formatPopulation";

export const CountryCard = ({ flag, name, population, region, capital }) => (
  <Card>
    <StyledLink to={`/detail/${name}`}>
      <img src={flag} alt={name} />

      <CardContent>
        <h3>{name}</h3>

        <CardInfo title="Population" data={formatPopulation(population)} />
        <CardInfo title="Region" data={region} />
        <CardInfo title="Capital" data={capital} />
      </CardContent>
    </StyledLink>
  </Card>
);
