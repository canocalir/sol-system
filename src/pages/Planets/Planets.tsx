import OrbitPlanet from "../../components/OrbitPlanet/OrbitPlanet"
import { PlanetsContainer, SolCircle } from "./Planets.styled"

const Planets = () => {
  return (
    <PlanetsContainer>
      <OrbitPlanet planet={"mars"}/>
      <OrbitPlanet planet={"earth"}/>
      <OrbitPlanet planet={"venus"}/>
      <OrbitPlanet planet={"mercury"}/>
      <SolCircle/>
      </PlanetsContainer>
  )
}

export default Planets