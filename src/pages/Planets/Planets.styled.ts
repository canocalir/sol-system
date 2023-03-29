import { motion } from "framer-motion";
import styled from "styled-components";

const PlanetsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: yellow;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

const SolCircle = styled.div`
  /* width: 10rem;
  height: 10rem;
  background-color: #e7a427;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  border: 5px solid #ec730f;
  transform: translate(-50%, -50%); */
`;


export { SolCircle, PlanetsContainer };
