import { BottomNavbarContainer, PlanetLink } from "./BottomNavbar.styled";

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
      {planets?.map((planet) => {
        return (
          <PlanetLink to={`/${planet}`}>
            <h2>{planet}</h2>
          </PlanetLink>
        );
      })}
    </BottomNavbarContainer>
  );
};

export default BottomNavbar;
