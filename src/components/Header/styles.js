import styled from "styled-components";

import { FlexWrapper } from "../../css/components";

export const StyledHeader = styled.header`
  padding: 0.75rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (min-width: 40rem) {
    padding: 1.5rem 3rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationWrapper = styled(FlexWrapper)`
  align-items: center;
  & * {
    margin: 0 0.35rem;
  }

  svg {
    cursor: pointer;
  }

  @media (min-width: 62.5rem) {
    & * {
      margin: 0 0.75rem;
    }
  }

  @media (max-width: 21rem) {
    span {
      display: none;
    }
  }
`;

export const Span = styled.span`
  cursor: pointer;
  font-weight: 600;
`;
