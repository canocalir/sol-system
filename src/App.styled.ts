import styled from "styled-components";
import { flexWrapper } from "./styles/globalStyles";
import stars from "./assets/2k_stars_milky_way.jpg"

export const MainContainer = styled.div`
    ${flexWrapper("center")};
    flex-direction: column;
    height: 100vh;
    background: url(${stars});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    gap: 4rem;
    @media screen and (max-width: 864px){
        ${flexWrapper("center")};
    }
`