import OrbitPlanet from "../../components/OrbitPlanet/OrbitPlanet";
import { PlanetsContainer, SolCircle } from "./Planets.styled";

const Planets = () => {
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
  const planetsMapping = planets?.map((name) => <OrbitPlanet planet={name} />);
  return (
    <PlanetsContainer>
      {planetsMapping}
      <SolCircle />
    </PlanetsContainer>
  );
};

export default Planets;
