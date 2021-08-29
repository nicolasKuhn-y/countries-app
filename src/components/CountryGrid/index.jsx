import React, { useState } from "react";

import { Pagination } from "../Pagination";
import { CountryCard } from "../CountryCard";

import { Grid } from "./styles";

export const CountryGrid = ({ countries }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const countriesPerPage = 12;
  const pagesVisited = countriesPerPage * pageNumber;

  const displayedCountries = countries.slice(
    pagesVisited,
    pagesVisited + countriesPerPage
  );

  const pageCount = Math.ceil(countries.length / countriesPerPage);

  return (
    <>
      {pageCount > 1 && (
        <Pagination pageCount={pageCount} setPageNumber={setPageNumber} />
      )}

      <Grid>
        {displayedCountries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </Grid>
    </>
  );
};
