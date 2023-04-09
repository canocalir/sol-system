import { useState } from "react";
import {
  NavbarPlanetsContainer,
  NavbarContainer,
  Heading,
  NavbarPlanetCircle,
  PlanetLink,
  DetailText,
  DetailTextContainer,
  UpArrow
} from "./BottomNavbar.styled";

const BottomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const planets = [
    "neptune",
    "uranus",
    "saturn",
    "jupiter",
    "mars",
    "earth",
    "venus",
    "mercury",
  ];

  const navbarShowConditional = isOpen && (
    <NavbarPlanetsContainer>
      {planets?.map((planet, index) => {
        return (
          <PlanetLink key={index} to={`/${planet}`}>
            <NavbarPlanetCircle planet={planet} />
            <h2>{planet}</h2>
          </PlanetLink>
        );
      })}
    </NavbarPlanetsContainer>
  );

  return (
    <NavbarContainer>
      <Heading>
        Sol Planets
        <DetailTextContainer>
          <DetailText onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? "Click here for details" : "Click here to close"}
          </DetailText>
          {!isOpen && <UpArrow />}
        </DetailTextContainer>
      </Heading>

      {navbarShowConditional}
    </NavbarContainer>
  );
};

export default BottomNavbar;
