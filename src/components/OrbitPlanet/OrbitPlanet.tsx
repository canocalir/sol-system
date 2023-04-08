import { Link } from "react-router-dom";
import {
  OrbitLine,
  PlanetBody,
  PlanetBodyContainer,
} from "./OrbitPlanet.styled";
import usePlanet from "../../hooks/usePlanet";
import {
  SaturnCircleFix,
  SaturnRings,
  UranusCircleFix,
  UranusRings,
} from "../DetailPlanet/DetailPlanet.styled";

type OrbitPlanetProps = {
  planet: string | any;
};

const OrbitPlanet = ({ planet }: OrbitPlanetProps) => {
  const { planetSpecs } = usePlanet(planet);
  return (
    <OrbitLine planetSpecs={planetSpecs}>
      <Link to={`/${planet}`}>
        <PlanetBodyContainer planetSpecs={planetSpecs}>
          <SaturnRings
            planetType={planet}
            width={12}
            height={20}
            borderWidth={3}
            top={-20}
            left={2}
          />
          <UranusRings
            planetType={planet}
            width={12}
            height={20}
            borderWidth={3}
            top={-50}
            left={-10}
          />
          <SaturnCircleFix
            planetType={planet}
            width={4.7}
            height={6}
            top={2}
            left={4.1}
          />
          <UranusCircleFix
              planetType={planet}
              width={2}
              height={9}
              top={0.5}
              left={3.5}
            />
          <PlanetBody planetSpecs={planetSpecs}>
          </PlanetBody>
        </PlanetBodyContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
