import { FC, useState } from "react";
import {
  NavbarPlanetsContainer,
  NavbarContainer,
  Heading,
  NavbarPlanetCircle,
  PlanetLink,
  DetailText,
  DetailTextContainer,
  UpArrow,
} from "./BottomNavbar.styled";
import { planets } from "../../functions/planets";

const BottomNavbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  const conditionalText = !isOpen
    ? "Click here for details"
    : "Click here to close";

  return (
    <NavbarContainer>
      <Heading>
        Sol Planets
        <DetailTextContainer>
          <DetailText onClick={() => setIsOpen(!isOpen)}>
            {conditionalText}
          </DetailText>
          {!isOpen && <UpArrow />}
        </DetailTextContainer>
      </Heading>

      {navbarShowConditional}
    </NavbarContainer>
  );
};

export default BottomNavbar;
