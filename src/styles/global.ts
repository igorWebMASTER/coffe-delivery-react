import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        /* color-scheme: light dark; */
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
   }
`