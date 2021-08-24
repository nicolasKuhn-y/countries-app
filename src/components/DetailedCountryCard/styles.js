import styled from "styled-components";

import { Container } from "../../css/components";

export const Flag = styled.img`
  border-radius: 0.2rem;

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

export const Button = styled.button`
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  min-width: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
`;

export const FlexContainer = styled(Container)`
  & > * {
    margin: 0.8rem 0;
    font-size: 1rem;
  }

  b {
    font-weight: 600;
  }

  @media (min-width: 62.5rem) {
    margin-right: ${({ mr }) => "5rem"};
  }
`;

export const CardContentWrapper = styled(Container)`
  @media (min-width: 75rem) {
    display: flex;
  }
`;
