import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div`
  margin: 2rem 0;

  @media (min-width: 64rem) {
    margin: 3rem 0;
  }
`;

export const Border = styled.div`
  padding: 0.35rem;
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.elements};
`;

export const Controller = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
  border: none;
  border-radius: 0.25rem;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
`;
