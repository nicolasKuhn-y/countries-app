import React from "react";

import {
  DetailContainer,
  CardContentContainer,
  Flag,
  CardContentWrapper,
  Card,
  Title,
} from "./styles";

import { CardInfo } from "../CardInfo";
import { BorderCountries } from "../BorderCountries";

import { formatPopulation } from "../../helpers/formatPopulation";

export const DetailedCountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
  nativeName,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  borders,
  countries,
}) => {
  return (
    <section>
      <DetailContainer>
        <Flag src={flag} alt={`${name} flag`} />
        <Card>
          <Title>{name}</Title>
          <CardContentWrapper>
            <CardContentContainer mr>
              <CardInfo title="Native Name" data={nativeName} />

              <CardInfo
                title="Population"
                data={formatPopulation(population)}
              />

              <CardInfo title="Region" data={region} />

              <CardInfo title="Subregion" data={subregion} />

              <CardInfo title="Capital" data={capital} />
            </CardContentContainer>

            <CardContentContainer>
              <CardInfo title="Top Level Domain" data={topLevelDomain} />

              <CardInfo
                title="Currencies"
                data={currencies.reduce((acc, { name }) => acc + name, "")}
              />

              <CardInfo
                title="Languages"
                data={languages.reduce((acc, { name }) => acc + ` ${name}`, "")}
              />
            </CardContentContainer>
          </CardContentWrapper>

          {borders.length > 0 ? (
            <div>
              <h3>Border Countries</h3>
              <BorderCountries borders={borders} countries={countries} />
            </div>
          ) : null}
        </Card>
      </DetailContainer>
    </section>
  );
};
