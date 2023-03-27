import { Link } from "react-router-dom"
import { OrbitLine,OrbitCircle } from "./OrbitPlanet.styled"

type OrbitPlanetProps = {
    planet: string
}

const OrbitPlanet = ({planet}:OrbitPlanetProps) => {
  return (
    <OrbitLine planetType={planet}>
        <Link to={`/${planet}`}>
        <OrbitCircle planetType={planet}></OrbitCircle>
        </Link>
    </OrbitLine>
  )
}

export default OrbitPlanet