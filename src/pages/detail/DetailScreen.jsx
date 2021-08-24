import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { DetailedCountryCard } from "../../components/DetailedCountryCard";

import { CountriesContext } from "../../context/CountriesContext";
import { getCountryByName } from "../../helpers/getCountryByName";

import { Container } from "../../css/components";
import { Button } from "./styles";

export const DetailScreen = ({ history }) => {
  const { countries } = useContext(CountriesContext);
  const { countryName } = useParams();

  const countryToShow = getCountryByName(countryName, countries.countriesList);

  return (
    <div>
      <Container>
        <Button as="button" onClick={() => history.goBack()}>
          &#8592; Back
        </Button>
      </Container>

      <DetailedCountryCard
        {...countryToShow}
        history={history}
        countries={countries.countriesList}
      />
    </div>
  );
};
