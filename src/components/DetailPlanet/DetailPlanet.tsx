import { useParams } from "react-router-dom";
import {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnCircleFix,
  SaturnRings,
  UranusCircleFix,
  UranusRings,
} from "./DetailPlanet.styled";
import useRings from "../../hooks/useRings";
import { FC } from "react";
import { OrbitLine } from "../OrbitPlanet/OrbitPlanet.styled";
import usePlanet from "../../hooks/usePlanet";

const DetailPlanet: FC = () => {
  const { name } = useParams<string>();
  const { ringSpecs } = useRings(name);
  const { planetSpecs } = usePlanet(name);

  return (
    <DetailPlanetContainer>
      <SaturnRings planetType={name} ringSpecs={ringSpecs} isDetail />
      <UranusRings planetType={name} ringSpecs={ringSpecs} isDetail />
      <DetailPlanetCircle planetType={name}>
        <OrbitLine planetSpecs={planetSpecs}>
          <SaturnCircleFix planetType={name} ringSpecs={ringSpecs} isDetail />
          <UranusCircleFix planetType={name} ringSpecs={ringSpecs} isDetail />
        </OrbitLine>
      </DetailPlanetCircle>
    </DetailPlanetContainer>
  );
};

export default DetailPlanet;
