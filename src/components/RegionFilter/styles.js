import styled from "styled-components";
import { Border, Controller } from "../../css/components";

export const SelectBorder = styled(Border)`
  max-width: 9.5rem;
  padding: 0.2rem;

  @media (min-width: 40rem) {
    max-width: 15rem;
  }
`;

export const Select = styled(Controller)`
  cursor: pointer;
  appearance: none;
  line-height: 1.2;
  padding: 0.75rem;
`;
