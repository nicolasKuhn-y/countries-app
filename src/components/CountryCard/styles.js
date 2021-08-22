import styled from "styled-components";

export const Card = styled.article`
  border-radius: 0.35rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  overflow: hidden;

  p {
    margin: 0.5rem 0;
  }

  h3 {
    margin: 1rem 0;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem 1rem;
`;
