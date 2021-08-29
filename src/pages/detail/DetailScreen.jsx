import React from "react";

import { DetailedCountryCard } from "../../components/DetailedCountryCard";

import { Container } from "../../css/components";
import { Button } from "./styles";

export const DetailScreen = ({ history }) => (
  <div>
    <Container>
      <Button onClick={() => history.replace("/")}>&#8592; Back</Button>
    </Container>

    <DetailedCountryCard />
  </div>
);
