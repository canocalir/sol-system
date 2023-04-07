import { motion } from "framer-motion";
import styled from "styled-components";

type DetailPlanetProps<T> = {
  planetType: T | undefined;
};

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps<string>>`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  ${({planetType}) => {
    return `
    background: url(src/assets/${planetType}.jpg);
    background-position: top;
    background-size: cover;
    `
  }}
`;

export { DetailPlanetCircle };
