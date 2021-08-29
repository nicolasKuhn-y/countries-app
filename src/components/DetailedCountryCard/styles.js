import styled from "styled-components";

import { Container } from "../../css/components";

export const Flag = styled.img`
  border-radius: 0.2rem;
  margin-bottom: 1rem;

  @media (min-width: 62.5rem) {
    max-width: 500px;
  }
`;

export const DetailContainer = styled.div`
  margin: 1rem 0;

  @media (min-width: 62.5rem) {
    display: flex;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Card = styled.article`
  @media (min-width: 62.5rem) {
    margin-left: 8rem;
  }
`;

export const CardContentContainer = styled(Container)`
  & > * {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  @media (min-width: 62.5rem) and (max-width: 75rem) {
    margin: 1rem 0;
  }

  @media (min-width: 75rem) {
    margin: 0;
  }
`;

export const CardContentWrapper = styled(Container)`
  @media (min-width: 75rem) {
    display: flex;
    justify-content: space-between;
    max-width: 34.375rem;
  }
`;
