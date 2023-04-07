import { Link } from "react-router-dom";
import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";

const NavbarPlanetsContainer = styled.div`
  ${flexWrapper("center")};
  flex-wrap: wrap;
  flex-direction: row-reverse;
  height: 10rem;
  border: none;
  border-radius: 2rem;
  gap: 1rem;
`;

const PlanetLink = styled(Link)`
  text-decoration: none;
  ${flexWrapper('center')};
  flex-direction: column;
  gap: 1rem;
  h2{
    color: #ffffff;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;

  }
`;

type NavbarProps = {
  planet: string;
};

const NavbarPlanetCircle = styled.div<NavbarProps>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &:hover{
    border: 3px solid #ffffff;
  }
  ${({ planet }) => {
    return `
    background: url(src/assets/${planet}.jpg);
    background-position: top;
    background-size: cover;
    `;
  }}
`;

const Heading = styled.h1`
  color: #ffffff;
  letter-spacing: 0.4rem;
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
`

const NavbarContainer = styled.div`
  ${flexWrapper("center")};
  flex-direction: column;
`

export { NavbarContainer, NavbarPlanetsContainer, Heading,  PlanetLink, NavbarPlanetCircle };
