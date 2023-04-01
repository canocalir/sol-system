import { Link } from "react-router-dom";
import {
  OrbitLine,
  PlanetBody,
  PlanetBodyContainer,
} from "./OrbitPlanet.styled";

type OrbitPlanetProps = {
  planet: string | any;
};

const OrbitPlanet = ({ planet }: OrbitPlanetProps) => {
  return (
    <OrbitLine planetType={planet}>
      <Link to={`/${planet}`}>
        <PlanetBodyContainer planetType={planet}>
          <PlanetBody planetType={planet}></PlanetBody>
        </PlanetBodyContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
