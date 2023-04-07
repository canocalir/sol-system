import { NavbarPlanetsContainer, NavbarContainer, Heading, NavbarPlanetCircle, PlanetLink } from "./BottomNavbar.styled";

const BottomNavbar = () => {
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
    <NavbarContainer>
    <Heading>Sol Planets</Heading>
    <NavbarPlanetsContainer>
      {planets?.map((planet, index) => {
        return (
          <PlanetLink key={index} to={`/${planet}`}>
            <NavbarPlanetCircle planet={planet}/>
            <h2>{planet}</h2>
          </PlanetLink>
        );
      })}
    </NavbarPlanetsContainer>
    </NavbarContainer>
  );
};

export default BottomNavbar;
