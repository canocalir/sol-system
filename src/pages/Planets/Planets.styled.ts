import { motion } from "framer-motion";
import styled from "styled-components";
import sol from "../../assets/2k_sun.jpg"

const PlanetsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const SolCircle = styled(motion.div)`
  width: 21rem;
  height: 21rem;
  background-color: #e7a427;
  border-radius: 50%;
  border: 5px solid #ec730f;
  background: url(${sol});
  box-shadow: rgba(248, 213, 14, 0.815) 0px 7px 29px 0px;
`;


export { SolCircle, PlanetsContainer };
