import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        
    }

    #_next{
        width: 100vw;
        height: 100vh;
    }

    :root{
        --background-primary: #5A5A5A;
        --background-secondary: #282928;

        --title-primary:#FFFFFF;
        --link-color:#01E1FF;
        --text-color:#FFFFFF;

        --entrance-color: #00FD65;
        --exit-color: #FF0000;
    }

    button{
        cursor: pointer;
        border: none;
        border-radius: 4px;

    }

    a{
        text-decoration: none;
    }


    * {
        scrollbar-width: thin;
        scrollbar-color: #5A5A5A;
    }

    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        background-color: #5A5A5A;
        
    }

    *::-webkit-scrollbar-thumb {
        background-color: #282928;
        border-radius: 20px;
       
    } 
`;
