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

const DetailPlanet = () => {
  const { name } = useParams();
  const { ringSpecs } = useRings(name);

  return (
    <DetailPlanetContainer>
      <SaturnRings planetType={name} ringSpecs={ringSpecs} isDetail />
      <UranusRings planetType={name} ringSpecs={ringSpecs} isDetail />
      <DetailPlanetCircle planetType={name}>
        <SaturnCircleFix planetType={name} ringSpecs={ringSpecs} isDetail/>
        <UranusCircleFix planetType={name} ringSpecs={ringSpecs} isDetail/>
      </DetailPlanetCircle>
    </DetailPlanetContainer>
  );
};

export default DetailPlanet;
