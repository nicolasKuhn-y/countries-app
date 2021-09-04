import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-size: 14px;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
    transition: background-color 0.15s linear, color 0.15s linear;
    
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
}

main{
    margin: 1rem;

    @media (min-width: 64rem){
        margin: 2rem 3rem;
    }
}

a{
    text-decoration: none;

    color: ${({ theme }) => theme.text};
}
}

img{
    max-width: 100%;
    height: auto;
}

/*
    React-paginate es imcompatible con styled components
    asi que hay que volver a lo clasico.
*/

.pagination__container {
  display: flex;
  list-style: none;
  font-size: 1rem;
  margin: 1.5rem 0;
}

.pagination__page-number,
.break {
  display: none;
}

.pagination__arrow {
  cursor: pointer;
  margin: 0 0.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 0.25rem;
  transition: background-color 350ms ease-in;
}

.pagination__arrow a {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
}

.pagination__arrow.disabled,
.pagination__arrow:hover {
  background-color: ${({ theme }) => theme.input};
}
`;
