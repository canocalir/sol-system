import { Link } from "react-router-dom";
import {
  OrbitLine,
  OrbitCircle,
  OrbitCircleContainer,
  PlanetZindex,
} from "./OrbitPlanet.styled";

type OrbitPlanetProps = {
  planet: string | any;
};

const OrbitPlanet = ({ planet }: OrbitPlanetProps) => {
  return (
    <PlanetZindex
      planetType={planet}
    >
      <OrbitLine planetType={planet}>
        <Link to={`/${planet}`}>
          <OrbitCircleContainer planetType={planet}>
            <OrbitCircle planetType={planet}></OrbitCircle>
          </OrbitCircleContainer>
        </Link>
      </OrbitLine>
    </PlanetZindex>
  );
};

export default OrbitPlanet;
