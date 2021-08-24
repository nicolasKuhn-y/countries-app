import React from "react";

import { Container } from "../../css/components";

import {
  Button,
  DetailContainer,
  FlexContainer,
  Flag,
  CardContentWrapper,
  Card,
  Title,
} from "./styles";

import { CardInfo } from "../CardInfo";

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
  history,
}) => {
  const handleBack = () => history.goBack();

  const formattedCurrencie = currencies.reduce(
    (acc, { name }) => acc + name,
    ""
  );

  const formattedLanguages = languages.reduce(
    (acc, { name }) => acc + " " + name,
    ""
  );

  console.log(formattedLanguages);

  return (
    <section>
      <Container>
        <Button as="button" onClick={handleBack}>
          &#8592; Back
        </Button>
      </Container>

      <DetailContainer>
        <Flag src={flag} alt={`${name} flag`} />
        <Card>
          <Title>{name}</Title>
          <CardContentWrapper>
            <FlexContainer mr>
              <CardInfo title="Native Name" data={nativeName} />

              <CardInfo title="Population" data={population} />

              <CardInfo title="Region" data={region} />

              <CardInfo title="Subregion" data={subregion} />

              <CardInfo title="Capital" data={capital} />
            </FlexContainer>

            <FlexContainer>
              <CardInfo title="Top Level Domain" data={topLevelDomain} />

              <CardInfo title="Currencies" data={formattedCurrencie} />

              <CardInfo title="Languages" data={formattedLanguages} />
            </FlexContainer>
          </CardContentWrapper>
        </Card>
      </DetailContainer>
    </section>
  );
};
