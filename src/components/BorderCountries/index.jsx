import React from "react";

import { CountryBox, CountryContainer } from "./styles";

export const BorderCountries = ({ borders }) => {
  return (
    <CountryContainer>
      {borders.map((border) => (
        <CountryBox key={border} as="div">
          <span>{border}</span>
        </CountryBox>
      ))}
    </CountryContainer>
  );
};
