import styled from "styled-components";
import { flexWrapper } from "./styles/globalStyles";
import stars from "./assets/2k_stars_milky_way.jpg"

export const MainContainer = styled.div`
    ${flexWrapper("center")};
    flex-direction: column;
    height: 100vh;
    padding-top: 12vh;
    gap: 10rem;
    background: url(${stars});
`