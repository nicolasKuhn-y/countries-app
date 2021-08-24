import styled from "styled-components";

import { BorderedBox } from "../../css/components";

import { Link } from "react-router-dom";

export const CountryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LinkBox = styled(Link)`
  margin: 1rem 0.5rem;
  text-align: center;
  ${BorderedBox}
`;
