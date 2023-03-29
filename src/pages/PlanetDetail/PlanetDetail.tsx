import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useGetPlanetDataQuery } from "../../features/planetsApi";
import DetailPlanet from "../../components/DetailPlanet/DetailPlanet";
import { PlanetDetailPageContainer } from "./PlanetDetail.styled";

const PlanetDetail = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPlanetDataQuery(name);
  const navigate = useNavigate()
  console.log(data);
  return (
    <>
    <PlanetDetailPageContainer
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.2 }}
      transition={{
        duration: 2,
      }}
    >
      <button onClick={() => navigate(-1)}>Back</button>
      <DetailPlanet/>
    </PlanetDetailPageContainer>
    </>
  );
};

export default PlanetDetail;
