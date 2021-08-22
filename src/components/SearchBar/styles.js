import styled from "styled-components";
import { Border, Controller } from "../../css/components";

export const Section = styled.section`
  position: relative;
  margin: 1rem 0;
`;

export const InputBorder = styled(Border)`
  @media (min-width: 40rem) {
    max-width: 25rem;
  }
`;

export const Input = styled(Controller)`
  padding: 1rem 0 1rem 3.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.text};
  }
`;

export const Mover = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.5rem;
`;
