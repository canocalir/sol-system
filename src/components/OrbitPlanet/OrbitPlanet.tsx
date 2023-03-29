import { Link } from "react-router-dom";
import {
  OrbitLine,
  OrbitCircle,
  OrbitCircleContainer,
} from "./OrbitPlanet.styled";

type OrbitPlanetProps = {
  planet: string | any;
};

const OrbitPlanet = ({ planet }: OrbitPlanetProps) => {
  return (
    <OrbitLine planetType={planet}>
      <Link to={`/${planet}`}>
        <OrbitCircleContainer planetType={planet}>
          <OrbitCircle planetType={planet}></OrbitCircle>
        </OrbitCircleContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
