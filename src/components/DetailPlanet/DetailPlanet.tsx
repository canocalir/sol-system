import { useParams } from "react-router-dom";
import {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnCircleFix,
  SaturnRings,
  UranusCircleFix,
  UranusRings,
} from "./DetailPlanet.styled";

const DetailPlanet = () => {
  const { name } = useParams();
  return (
    <DetailPlanetContainer>
      <SaturnRings
        planetType={name}
        width={50}
        height={40}
        borderWidth={9}
        top={-45}
        left={-75}
      />
      <UranusRings
        planetType={name}
        width={50}
        height={35}
        borderWidth={5}
        top={-35}
        left={-75}
      />
      <DetailPlanetCircle planetType={name}>
        <SaturnCircleFix planetType={name} width={20} height={10} />
        <UranusCircleFix planetType={name} width={10} height={20} />
      </DetailPlanetCircle>
    </DetailPlanetContainer>
  );
};

export default DetailPlanet;
