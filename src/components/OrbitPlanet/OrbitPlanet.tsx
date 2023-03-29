import { Link } from "react-router-dom"
import { OrbitLine,OrbitCircle } from "./OrbitPlanet.styled"

type OrbitPlanetProps = {
    planet: string | any
}

const OrbitPlanet = ({planet}:OrbitPlanetProps) => {
  return (
    <OrbitLine planetType={planet}>
        <Link to={`/${planet}`}>
        <OrbitCircle whileHover={{scale: 1.5}} planetType={planet}></OrbitCircle>
        </Link>
    </OrbitLine>
  )
}

export default OrbitPlanet