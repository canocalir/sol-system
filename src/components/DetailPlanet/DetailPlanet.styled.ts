import { motion } from "framer-motion";
import styled from "styled-components";

type DetailPlanetProps<T> = {
  planetType: T | undefined;
};

const SaturnRings = styled.div<DetailPlanetProps<string>>`
  ${({ planetType }) => {
    if (planetType === "saturn") {
      return `
      width: 50vw;
      height: 40vw;
      border: solid 9vw #5c5c5b;
      border-radius: 50%;
      top: -45%;
      left: -75%; 
      position: absolute;
      transform: rotate3d(1, 0, 0, 75deg);
      z-index: 2;
    `;
    }
  }}
`;

const DetailPlanetContainer = styled.div`
  position: relative;
`;

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps<string>>`
  width: 20vw;
  height: 20vw;
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

const SaturnCircleFix = styled(motion.div)<DetailPlanetProps<string>>`
  ${({ planetType }) => {
    if (planetType === "saturn") {
      return `
    background: url(src/assets/${planetType}.jpg);
    background-position: top;
    background-size: cover;
    width: 20vw;
    height: 10vw;
    z-index: 3;
    border-radius:10rem 10rem 0 0;
    position: absolute;
    `;
    }
  }}
`;

export {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnRings,
  SaturnCircleFix,
};
