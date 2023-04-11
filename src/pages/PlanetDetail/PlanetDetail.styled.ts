import { motion } from "framer-motion";
import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";

const PlanetDetailPageContainer = styled(motion.div)`
  ${flexWrapper("space-between")};
  width: 100vw;
  height: 100%;
  @media screen and (max-width: 1200px){
        flex-direction: column;
    }
`;

const PlanetDetailInnerContainer = styled.div`
  ${flexWrapper("center")};
  flex-direction: column;
  background-color: #ffffff11;
  width: 80vw;
  height: 100%;
  @media screen and (max-width: 1200px){
        width: 100vw;
    }
`;

export { PlanetDetailPageContainer, PlanetDetailInnerContainer };
