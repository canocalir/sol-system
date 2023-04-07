import { Link } from "react-router-dom";
import {
  OrbitLine,
  PlanetBody,
  PlanetBodyContainer,
} from "./OrbitPlanet.styled";
import usePlanet from "../../hooks/usePlanet";

type OrbitPlanetProps = {
  planet: string | any;
};

const OrbitPlanet = ({ planet }: OrbitPlanetProps) => {
  const { planetSpecs } = usePlanet(planet);
  return (
    <OrbitLine planetSpecs={planetSpecs}>
      <Link to={`/${planet}`}>
        <PlanetBodyContainer planetSpecs={planetSpecs}>
          <PlanetBody planetSpecs={planetSpecs}></PlanetBody>
        </PlanetBodyContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
