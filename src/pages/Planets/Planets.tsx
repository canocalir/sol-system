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
    <PlanetsContainer initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}>
      {planetsMapping}
      <SolCircle />
    </PlanetsContainer>
  );
};

export default Planets;
