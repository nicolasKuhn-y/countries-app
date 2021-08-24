import styled from "styled-components";

import { BorderedBox } from "../../css/components";

export const CountryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CountryBox = styled(BorderedBox)`
  margin: 1rem 0.5rem;
  text-align: center;
`;
