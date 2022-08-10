import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Roboto, Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        scroll-behavior: smoothing;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
    }

    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #f2f2f2; 
        border-radius: 6px;

    }
    
    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme["yellow-dark"]}; 
        border-radius: 6px;
        box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
      border-radius: 6px;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-synthesis: none;
        background: ${(props) => props.theme['background']};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body, input, textarea, button {
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 1rem;
   }
`