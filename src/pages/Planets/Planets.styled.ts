import { motion } from "framer-motion";
import styled from "styled-components";
import { flexWrapper } from "../../styles/globalStyles";
import { Sol } from "../../types/planetTypes";

const PlanetsContainer = styled(motion.div)`
  ${flexWrapper('center')};
  position: relative;
  border-radius: 50%;
`;

const SolCircle = styled(motion.div)<Sol>`
  width: ${({planetSpecs}) => planetSpecs?.width}vw;
  height: ${({planetSpecs}) => planetSpecs?.height}vw;
  border-radius: 50%;
  border: 5px solid #ec730f;
  ${({sunImage}) => {
    return `
    background: url(src/assets/${sunImage}.jpg);
    `
  }}
  
  box-shadow: rgba(248, 213, 14, 0.815) 0px 7px 29px 0px;
`;


export { SolCircle, PlanetsContainer };
