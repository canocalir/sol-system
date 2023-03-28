import { useParams } from "react-router-dom"

const PlanetDetail = () => {
    const {name} = useParams()
  return (
    <div>{`This is ${name?.toUpperCase()} detail page`}</div>
  )
}

export default PlanetDetail