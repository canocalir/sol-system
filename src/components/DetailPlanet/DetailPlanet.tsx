import { useParams } from "react-router-dom";
import { DetailPlanetCircle, DetailPlanetContainer, SaturnCircleFix, SaturnRings } from "./DetailPlanet.styled"

const DetailPlanet = () => {
    const { name } = useParams();
  return (
    <DetailPlanetContainer>
      <SaturnRings planetType={name}/>
    <DetailPlanetCircle planetType={name}>
      
      <SaturnCircleFix/>
    </DetailPlanetCircle>
    </DetailPlanetContainer>
  )
}

export default DetailPlanet