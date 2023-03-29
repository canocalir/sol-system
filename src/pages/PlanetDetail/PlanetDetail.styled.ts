import { motion } from "framer-motion";
import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";

const PlanetDetailPageContainer = styled(motion.div)`
  ${flexWrapper("space-around")};
  height: 100vh;
  width: 100vw;
`;

export {PlanetDetailPageContainer}