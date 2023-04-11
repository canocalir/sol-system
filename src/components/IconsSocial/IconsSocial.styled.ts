import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";
import { NavLink } from "react-router-dom";

const IconsSocialContainer = styled.div`
    ${flexWrapper('space-around')};
    position: absolute;
    top:1rem;
    right: 1rem;
    width: fit-content;
    gap: 1rem;
    font-size: 1.5rem;
    background-color: #ffffff17;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 20px 0px;
`

const IconLink = styled(NavLink)`
    width: 100%;
    color: #ffffff;
    text-decoration: none;
`

export {IconsSocialContainer, IconLink}