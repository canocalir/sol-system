import { useParams } from "react-router-dom";
import { DetailPlanetCircle } from "./DetailPlanet.styled"

const DetailPlanet = () => {
    const { name } = useParams();
  return (
    <DetailPlanetCircle planetType={name}>
    </DetailPlanetCircle>
  )
}

export default DetailPlanet