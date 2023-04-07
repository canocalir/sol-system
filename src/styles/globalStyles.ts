import { createGlobalStyle } from "styled-components";

export const flexWrapper = (justfiyType:string) => `
    display: flex;
    justify-content: ${justfiyType};
    align-items: center;
`

const GlobalStyles = createGlobalStyle`
    body{
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
