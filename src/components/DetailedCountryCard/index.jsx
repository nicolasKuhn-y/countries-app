import React, { useContext } from "react";
import { useParams } from "react-router-dom";

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
import { getCountryByName } from "../../helpers/getCountryByName";

import { CountriesContext } from "../../context/CountriesContext";

export const DetailedCountryCard = () => {
  const { countryName } = useParams();

  const [{ countriesList }] = useContext(CountriesContext);

  const countryToShow = getCountryByName(countryName, countriesList);

  const {
    name,
    flag,
    nativeName,
    population,
    currencies,
    languages,
    region,
    subregion,
    capital,
    topLevelDomain,
    borders,
  } = countryToShow;

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
                data={currencies.reduce((list, { name }) => list + name, "")}
              />

              <CardInfo
                title="Languages"
                data={languages.reduce(
                  (list, { name }) => list + ` ${name}`,
                  ""
                )}
              />
            </CardContentContainer>
          </CardContentWrapper>

          {borders.length > 0 ? (
            <div>
              <h3>Border Countries</h3>
              <BorderCountries borders={borders} />
            </div>
          ) : null}
        </Card>
      </DetailContainer>
    </section>
  );
};
