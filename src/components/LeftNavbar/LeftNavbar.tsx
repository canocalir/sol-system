import { useNavigate } from "react-router-dom";
import {
  Heading,
  NavbarPlanetCircle,
  NavbarPlanetsContainer,
  NavbarSaturnRings,
  PlanetLink,
} from "../BottomNavbar/BottomNavbar.styled";
import { BackButton, LeftNavbarContainer } from "./LeftNavbar.styled";
import { FC } from "react";
import { planets } from "../../functions/planets";

const LeftNavbar: FC = () => {
  const navigate = useNavigate();

  const planetsMapping = planets?.map((planet, index) => {
    return (
      <PlanetLink key={index} to={`/${planet}`}>
        <NavbarPlanetCircle planet={planet}>
        {planet === "saturn" && <NavbarSaturnRings />}
        </NavbarPlanetCircle>
        <h2>{planet}</h2>
      </PlanetLink>
    );
  });

  return (
    <LeftNavbarContainer>
      <BackButton onClick={() => navigate("/")}>Back to Orbit View</BackButton>
      <Heading>Sol Planets</Heading>
      <NavbarPlanetsContainer>{planetsMapping}</NavbarPlanetsContainer>
    </LeftNavbarContainer>
  );
};

export default LeftNavbar;
