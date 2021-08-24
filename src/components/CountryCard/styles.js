import styled from "styled-components";

import { Link } from "react-router-dom";

export const Card = styled.article`
  max-width: 18.75rem;
  min-height: 25rem;
  border-radius: 0.35rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  overflow: hidden;
  transition: background-color 350ms ease-out;

  p {
    margin: 0.5rem 0;
  }

  h3 {
    margin: 1rem 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.elements};
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem 1rem;
`;

export const StyledLink = styled(Link)`
  transition: color 350ms ease-in;

  &:hover {
    color: ${({ theme }) => theme.input};
  }
`;
