import { motion } from "framer-motion";
import styled from "styled-components";
import sol from "../../assets/2k_sun.jpg"
import { flexWrapper } from "../../styles/globalStyles";

const PlanetsContainer = styled(motion.div)`
  ${flexWrapper('center')};
  position: relative;
  border-radius: 50%;
  width: 100vw;
`;

const SolCircle = styled(motion.div)`
  width: 25rem;
  height: 25rem;
  background-color: #e7a427;
  border-radius: 50%;
  border: 5px solid #ec730f;
  background: url(${sol});
  box-shadow: rgba(248, 213, 14, 0.815) 0px 7px 29px 0px;
`;

const Heading = styled.h1`
  color: #ffffff;
  letter-spacing: 0.4rem;
  font-size: 3rem;
  font-weight: 600;
  font-family: 'Bebas Neue', cursive;
  text-transform: uppercase;
`


export { SolCircle, PlanetsContainer, Heading };
