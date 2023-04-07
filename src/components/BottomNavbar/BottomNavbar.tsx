import { BottomNavbarContainer, NavbarPlanetCircle, PlanetLink } from "./BottomNavbar.styled";

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
    <BottomNavbarContainer>
      {planets?.map((planet, index) => {
        return (
          <PlanetLink key={index} to={`/${planet}`}>
            <NavbarPlanetCircle planet={planet}/>
            <h2>{planet}</h2>
          </PlanetLink>
        );
      })}
    </BottomNavbarContainer>
  );
};

export default BottomNavbar;
