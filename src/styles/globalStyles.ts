import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        display: flex;
        height: 100vh;
        width: 100%;
        align-items: center;
        justify-content: center;
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
        overflow: hidden;
    }
`;

export default GlobalStyles;
