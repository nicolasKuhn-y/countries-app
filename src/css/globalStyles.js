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
    transition: all 0.35s linear;
    
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
}

main{
    margin: 1rem;

    @media (min-width: 64rem){
        margin: 2rem 3rem;
    }
}

img{
    max-width: 100%;
    height: auto;
}

`;
