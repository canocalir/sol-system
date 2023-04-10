import { motion } from "framer-motion";
import styled from "styled-components";
import { rings, ringsFix } from "../../functions/rings";
import { DetailPlanetProps } from "../../types/detailTypes";

const DetailPlanetContainer = styled.div`
  position: relative;
`;

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps>`
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

const SaturnRings = styled.div<DetailPlanetProps>`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "saturn") {
      return `
      ${
        isDetail
          ? rings(
              ringSpecs?.detail?.width,
              ringSpecs?.detail?.height,
              ringSpecs?.detail?.top,
              ringSpecs?.detail?.left
            )
          : rings(
              ringSpecs?.orbit?.width,
              ringSpecs?.orbit?.height,
              ringSpecs?.orbit?.top,
              ringSpecs?.orbit?.left
            )
      }
      border: solid ${
        isDetail
          ? ringSpecs?.detail?.borderWidth
          : ringSpecs?.orbit?.borderWidth
      }vw #5c5c5b;
      transform: rotate3d(1, 0, 0, 75deg);
    `;
    }
  }}
`;

const UranusRings = styled.div<DetailPlanetProps>`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "uranus") {
      return `
      ${
        isDetail
          ? rings(
              ringSpecs?.detail?.width,
              ringSpecs?.detail?.height,
              ringSpecs?.detail?.top,
              ringSpecs?.detail?.left
            )
          : rings(
              ringSpecs?.orbit?.width,
              ringSpecs?.orbit?.height,
              ringSpecs?.orbit?.top,
              ringSpecs?.orbit?.left
            )
      }
      border: solid ${
        isDetail
          ? ringSpecs?.detail?.borderWidth
          : ringSpecs?.orbit?.borderWidth
      }vw #85c0e2;
      transform: rotate3d(0.3, 8, 0, 80deg);
    `;
    }
  }}
`;

const SaturnCircleFix = styled.div<DetailPlanetProps>`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "saturn") {
      return `
      background-position: top;
      border-radius: 10vw 10vw 0 0;
      ${
        isDetail
          ? ringsFix(
              ringSpecs?.detail?.fix?.width,
              ringSpecs?.detail?.fix?.height,
              ringSpecs?.detail?.fix?.top,
              ringSpecs?.detail?.fix?.left
            )
          : ringsFix(
              ringSpecs?.orbit?.fix?.width,
              ringSpecs?.orbit?.fix?.height,
              ringSpecs?.orbit?.fix?.top,
              ringSpecs?.orbit?.fix?.left
            )
      }
      background: url(src/assets/${planetType}.jpg);
    `;
    }
  }}
`;

const UranusCircleFix = styled.div<DetailPlanetProps>`
  ${({ planetType, ringSpecs, isDetail }) => {
    if (planetType === "uranus") {
      return `
      background: url(src/assets/${planetType}.jpg);
      background-position: center;
      border-radius: 0 10vw 10vw 0;
      transform: rotate(180deg);
      ${
        isDetail
          ? ringsFix(
              ringSpecs?.detail?.fix?.width,
              ringSpecs?.detail?.fix?.height,
              ringSpecs?.detail?.fix?.top,
              ringSpecs?.detail?.fix?.left
            )
          : ringsFix(
              ringSpecs?.orbit?.fix?.width,
              ringSpecs?.orbit?.fix?.height,
              ringSpecs?.orbit?.fix?.top,
              ringSpecs?.orbit?.fix?.left
            )
      }
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
