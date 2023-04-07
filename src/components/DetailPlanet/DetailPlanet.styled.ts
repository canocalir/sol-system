import { motion } from "framer-motion";
import styled from "styled-components";
import rings from "../../assets/saturn_ring.png";

type DetailPlanetProps<T> = {
  planetType: T | undefined;
};

const SaturnRings = styled.div<DetailPlanetProps<string>>`
  ${({ planetType }) => {
    if (planetType === "saturn") {
      return `
      width: 150%;
      height: 305px;
      border: solid 50px #b8b08d;
      border-radius: 50%;
      top: 50%; 
      position: absolute;
      transform: rotate3d(1, 0, 0, 75deg);
    `;
    }
  }}
`;

const DetailPlanetContainer = styled.div`
  position: relative;
  border: 2px solid red;
`

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps<string>>`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  position: relative;
  ${({ planetType }) => {
    return `
    background: url(src/assets/${planetType}.jpg);
    background-position: top;
    background-size: cover;
    `;
  }}
`;

const SaturnCircleFix = styled(motion.div)`
  width: 20rem;
  height: 10rem;
  border-radius:10rem 10rem 0 0;
  position: absolute;
  border: 2px solid red;
`;

export { DetailPlanetCircle, DetailPlanetContainer, SaturnRings, SaturnCircleFix };
