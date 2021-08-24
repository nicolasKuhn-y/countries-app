import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-gap: 2rem 1rem;

  @media (min-width: 64rem) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 47.5rem) and (max-width: 64rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 31.25rem) and (max-width: 47.5rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
