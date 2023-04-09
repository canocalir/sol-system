import { useNavigate } from "react-router-dom";
import { Heading, NavbarPlanetCircle, NavbarPlanetsContainer, PlanetLink } from "../BottomNavbar/BottomNavbar.styled"
import { BackButton, LeftNavbarContainer } from "./LeftNavbar.styled"

const LeftNavbar = () => {
    const navigate = useNavigate()
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
  return (
    <LeftNavbarContainer>
        <BackButton onClick={() => navigate("/")}>Back to Orbit View</BackButton>
        <Heading>Sol Planets</Heading>
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
    </LeftNavbarContainer>
  )
}

export default LeftNavbar