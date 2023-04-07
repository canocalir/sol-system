import { createGlobalStyle } from "styled-components";

export const flexWrapper = (justfiyType:string) => `
    display: flex;
    justify-content: ${justfiyType};
    align-items: center;
`

const GlobalStyles = createGlobalStyle`
    body{
        background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);        
        overflow-X: hidden;
    }
`;

export default GlobalStyles;
