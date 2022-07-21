import { createGlobalStyle } from "styled-components";

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
