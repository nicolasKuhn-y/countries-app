import React from "react";

import { getBorderCountryName } from "../../helpers/getBorderCountries";

import { LinkBox, CountryContainer } from "./styles";

export const BorderCountries = ({ borders, countries }) => {
  return (
    <CountryContainer>
      {borders.map((border) => {
        const countryName = getBorderCountryName(countries, border);
        return (
          <LinkBox key={border} to={`/detail/${countryName}`}>
            <span>{countryName}</span>
          </LinkBox>
        );
      })}
    </CountryContainer>
  );
};
