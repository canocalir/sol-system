import { motion } from "framer-motion";
import styled from "styled-components";

type DetailPlanetProps<T> = {
  planetType: T | undefined;
  width?: number;
  height?: number;
  borderWidth?: number;
  top?: number;
  left?: number;
};

const rings = (
  width: number | unknown,
  height: number | unknown,
  top: number | unknown,
  left: number | unknown
) => {
  return `
      width: ${width}vw;
      height: ${height}vw;
      border-radius: 50%;
      top: ${top}%;
      left: ${left}%; 
      position: absolute;
      z-index: 2;
    `;
};

const ringsFix = (
  width: number | unknown,
  height: number | unknown,
  top: number | unknown,
  left: number | unknown
) => {
  return `
      background-size: cover;
      width: ${width}vw;
      height: ${height}vw;
      position: absolute;
      top: ${top}vw;
      left: ${left}vw; 
      z-index: 3;
    `;
};

const SaturnRings = styled.div<DetailPlanetProps<string>>`
  ${({ planetType, width, height, borderWidth, top, left }) => {
    if (planetType === "saturn") {
      return `
      ${rings(width, height, top, left)};
      border: solid ${borderWidth}vw #5c5c5b;
      transform: rotate3d(1, 0, 0, 75deg);
    `;
    }
  }}
`;

const UranusRings = styled.div<DetailPlanetProps<string>>`
  ${({ planetType, width, height, borderWidth, top, left }) => {
    if (planetType === "uranus") {
      return `
      ${rings(width, height, top, left)};
      border: solid ${borderWidth}vw #85c0e2;
      transform: rotate3d(0.3, 8, 0, 80deg);
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

const SaturnCircleFix = styled.div<DetailPlanetProps<string>>`
  ${({ planetType, width, height, top, left }) => {
    if (planetType === "saturn") {
      return `
      background-position: top;
      border-radius: 10vw 10vw 0 0;
      ${ringsFix(width, height, top, left)};
      background: url(src/assets/${planetType}.jpg);
    `;
    }
  }}
`;

const UranusCircleFix = styled.div<DetailPlanetProps<string>>`
  ${({ planetType, width, height, top, left }) => {
    if (planetType === "uranus") {
      return `
      background: url(src/assets/${planetType}.jpg);
      background-position: center;
      border-radius: 0 10vw 10vw 0;
      transform: rotate(180deg);
      ${ringsFix(width, height, top, left)};
    `;
    }
  }}
`;

export {
  DetailPlanetCircle,
  DetailPlanetContainer,
  SaturnRings,
  UranusRings,
  SaturnCircleFix,
  UranusCircleFix,
};
