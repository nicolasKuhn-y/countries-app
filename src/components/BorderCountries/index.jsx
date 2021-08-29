import React, { useContext } from "react";

import { CountriesContext } from "../../context/CountriesContext";
import { getBorderCountryName } from "../../helpers/getBorderCountries";

import { LinkBox, CountryContainer } from "./styles";

export const BorderCountries = ({ borders }) => {
  const [{ countriesList }] = useContext(CountriesContext);

  return (
    <CountryContainer>
      {borders.map((border) => {
        const countryName = getBorderCountryName(countriesList, border);
        return (
          <LinkBox key={border} to={`/detail/${countryName}`}>
            <span>{countryName}</span>
          </LinkBox>
        );
      })}
    </CountryContainer>
  );
};
