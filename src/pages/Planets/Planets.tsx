import BottomNavbar from "../../components/BottomNavbar/BottomNavbar";
import OrbitPlanet from "../../components/OrbitPlanet/OrbitPlanet";
import usePlanet from "../../hooks/usePlanet";
import {  PlanetsContainer, SolCircle } from "./Planets.styled";

const Planets = () => {
  const { planetSpecs } = usePlanet("sun");

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
  const planetsMapping = planets?.map((name, index) => (
    <OrbitPlanet planet={name} key={index} />
  ));
  return (
    <>
      
      <PlanetsContainer
        initial={{ opacity: 0, scale: 0.1}}
        animate={{ opacity: 1, scale: 0.45, scaleY: 0.4 }}
        transition={{
          duration: 2,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 15,
            stiffness: 100,
            restDelta: 0.005,
          },
        }}
      >
        <SolCircle planetSpecs={planetSpecs} sunImage={planetSpecs?.name} animate={{ scaleX: 0.4 }} />
        {planetsMapping}
      </PlanetsContainer>
      
      <BottomNavbar />
    </>
  );
};

export default Planets;
