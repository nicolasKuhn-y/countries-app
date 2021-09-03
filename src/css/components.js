import styled, { css } from "styled-components";

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

export const Controller = styled.input(({ theme }) => ({
  fontFamily: "inherit",
  fontSize: "inherit",
  width: "100%",
  border: "none",
  borderRadius: "0.25rem",
  color: theme.text,
  backgroundColor: theme.background,
}));

export const BorderedBox = css`
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  min-width: 100px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: background-color 350ms ease-in;

  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};

  &:hover {
    background-color: ${({ theme }) => theme.input};
  }
`;
