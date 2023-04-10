import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";
import { BsChevronDoubleUp } from "react-icons/bs";
import { NavbarProps } from "../../types/navbarTypes";

const arrowDownAnimation = keyframes`
0%{
  top: 2rem;
}
100%{
  top: 0rem;
}
`;

const NavbarPlanetsContainer = styled.div`
  ${flexWrapper("center")};
  flex-wrap: wrap;
  flex-direction: row-reverse;
  height: fit-content;
  border: none;
  border-radius: 2rem;
  gap: 1rem;
`;

const PlanetLink = styled(Link)`
  text-decoration: none;
  ${flexWrapper("center")};
  flex-direction: column;
  gap: 1rem;
  h2 {
    color: #ffffff;
    text-transform: uppercase;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 0.1rem;
  }
`;

const NavbarPlanetCircle = styled.div<NavbarProps>`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  &:hover {
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
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  ${flexWrapper("center")};
  flex-direction: column;
`;

const DetailText = styled.h4`
  color: #58c0bb;
  font-size: 1rem;
  border: 2px solid #58c0bb;
  border-radius: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #58c0bb;
    color: #000000;
    padding: 0.5rem;
    transition: 300ms ease-in-out;
  }
`;

const DetailTextContainer = styled.div`
  ${flexWrapper("center")};
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;

const NavbarContainer = styled.div`
  ${flexWrapper("center")};
  flex-direction: column;
  gap: 2rem;
`;

const UpArrow = styled(BsChevronDoubleUp)`
  position: relative;
  animation: ${arrowDownAnimation} 2s infinite;
`;

export {
  NavbarContainer,
  NavbarPlanetsContainer,
  Heading,
  DetailText,
  PlanetLink,
  UpArrow,
  DetailTextContainer,
  NavbarPlanetCircle,
};
