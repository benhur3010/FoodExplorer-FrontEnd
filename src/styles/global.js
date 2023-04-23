import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        overflow: auto;

        -webkit-font-smoothing: antialiased;

        ::-webkit-scrollbar {
            background-color: none;
            width: 0.7rem;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
            border-radius: 1rem;

        }

    }

    body, button {
        font-family: 'Poppins', sans-serif;
    }

    textarea, h1, input {
        font-family: 'Roboto', sans-serif;
    }

    ul, li {
        list-style: none;
        appearance: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    a {
        text-decoration: none;
    }
`