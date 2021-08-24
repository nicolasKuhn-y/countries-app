import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DetailedCountryCard } from "../../components/DetailedCountryCard";

import { CountriesContext } from "../../context/CountriesContext";
import { getCountryByName } from "../../helpers/getCountryByName";

export const DetailScreen = ({ history }) => {
  const { countries } = useContext(CountriesContext);
  const { countryName } = useParams();

  const countryToShow = getCountryByName(countryName, countries.countriesList);

  return (
    <div>
      <DetailedCountryCard {...countryToShow} history={history} />
    </div>
  );
};
