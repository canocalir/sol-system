import { useParams } from "react-router-dom";
import { useGetPlanetDataQuery } from "../../features/planetsApi";
import DetailPlanet from "../../components/DetailPlanet/DetailPlanet";
import {
  PlanetDetailInnerContainer,
  PlanetDetailPageContainer,
} from "./PlanetDetail.styled";
import LeftNavbar from "../../components/LeftNavbar/LeftNavbar";
import { FC } from "react";

const PlanetDetail: FC = () => {
  const { name } = useParams();

  const { data, error, isLoading } = useGetPlanetDataQuery(name);

  return (
    <>
      <PlanetDetailPageContainer
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
        }}
      >
        <LeftNavbar />
        <PlanetDetailInnerContainer>
          <DetailPlanet />
        </PlanetDetailInnerContainer>
      </PlanetDetailPageContainer>
    </>
  );
};

export default PlanetDetail;
