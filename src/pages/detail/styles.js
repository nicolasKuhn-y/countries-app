import styled from "styled-components";

import { BorderedBox } from "../../css/components";

export const Button = styled(BorderedBox)`
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  transition: background-color 350ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.input};
  }
`;
