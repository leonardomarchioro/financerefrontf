import styled, { createGlobalStyle } from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColors.primaryBackground};

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.textColors.titlePrimary};
  }
`;

export const GlobalStyle = createGlobalStyle`


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Poppins", sans-serif;
        transition: all 0.5s ease;
    }

    #_next{
        width: 100vw;
        height: 100vh;
        
    }

    body {
        width: 100vw;
        height: 100vh;
    
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;

    }

    a{
        text-decoration: none;
    }
    ul,li {
        list-style: none;
    }


`;
