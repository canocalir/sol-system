import { useParams } from "react-router-dom"
import {motion} from "framer-motion"
import { useGetPlanetDataQuery } from "../../features/planetsApi"

const PlanetDetail = () => {

    const {name} = useParams()
  const {data, error, isLoading} = useGetPlanetDataQuery(name)
  console.log(data)
  return (
    <motion.div
    initial={{opacity: 0, scale: 0.2}}
    animate={{opacity: 1, scale: 1}}
    exit={{opacity: 0, scale: 0.2}}
    transition={{
      duration: 2
    }}
    style={{backgroundColor: "#ffffff"}}    
    >{`This is ${name?.toUpperCase()} detail page`}
    </motion.div>
  )
}

export default PlanetDetail