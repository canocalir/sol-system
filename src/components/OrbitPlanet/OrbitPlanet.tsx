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
import useRings from "../../hooks/useRings";
import { OrbitPlanetProps } from "../../types/planetTypes";
import { FC } from "react";

const OrbitPlanet: FC<OrbitPlanetProps> = ({ planet }) => {
  const { planetSpecs } = usePlanet(planet);
  const { ringSpecs } = useRings(planet);

  return (
    <OrbitLine planetSpecs={planetSpecs}>
      <Link to={`/${planet}`}>
        <PlanetBodyContainer planetSpecs={planetSpecs}>
          <SaturnRings planetType={planet} ringSpecs={ringSpecs} />
          <UranusRings planetType={planet} ringSpecs={ringSpecs} />
          <SaturnCircleFix planetType={planet} ringSpecs={ringSpecs} />
          <UranusCircleFix planetType={planet} ringSpecs={ringSpecs} />
          <PlanetBody planetSpecs={planetSpecs}></PlanetBody>
        </PlanetBodyContainer>
      </Link>
    </OrbitLine>
  );
};

export default OrbitPlanet;
