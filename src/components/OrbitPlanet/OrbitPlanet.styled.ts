import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

import { flexWrapper } from "../../styles/globalStyles";

const PlanetRotation = keyframes`
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
`;

const PlanetRotationCorrect = keyframes`
  0%{
    transform: rotateZ(360deg);
  }
  100%{
    transform: rotateZ(0deg);
  }
`;

type OrbitLineProps = {
  planetSpecs: any;
};

const OrbitLine = styled.div<OrbitLineProps>`
  width: ${({ planetSpecs }) => planetSpecs?.orbitDistance}px;
  height: ${({ planetSpecs }) => planetSpecs?.orbitDistance}px;
  border: 5px #30e3e97a dashed;
  border-radius: 50%;
  position: absolute;
  @media (max-width: 864px) {
  }
  -webkit-animation: ${PlanetRotation}
      ${({ planetSpecs }) => planetSpecs?.animation}s linear infinite,
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite;
  animation: ${PlanetRotation} ${({ planetSpecs }) => planetSpecs?.animation}s
      linear infinite,
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite;
  &:hover {
    border-color: #d2d1d4;
    cursor: pointer;
  }
`;

const PlanetBody = styled(motion.div)<OrbitLineProps>`
  border-radius: 50%;
  border: none;
  transform: scaleX(0.4);
  position: absolute;
  overflow: hidden;
  ${({ planetSpecs }) => {
    return `
    background: url(src/assets/${planetSpecs?.name}.jpg);
    background-position: center;
    background-size: cover;
    `;
  }}
  &:hover {
    border: 10px solid #ffffff;
    border-color: #d2d1d4;
    cursor: pointer;
  }
  ${flexWrapper("flex-start")};
  width: ${({ planetSpecs }) => planetSpecs?.width}rem;
  height: ${({ planetSpecs }) => planetSpecs?.height}rem;
`;

const PlanetBodyContainer = styled.div<OrbitLineProps>`
  position: absolute;
  width: ${({ planetSpecs }) => planetSpecs?.width}rem;
  height: ${({ planetSpecs }) => planetSpecs?.height}rem;
  top: ${({ planetSpecs }) => planetSpecs?.position?.top}rem;
  right: ${({ planetSpecs }) => planetSpecs?.position?.right}rem;
  bottom: ${({ planetSpecs }) => planetSpecs?.position?.bottom}rem;
  left: ${({ planetSpecs }) => planetSpecs?.position?.left}rem;
  animation: ${PlanetRotationCorrect}
    ${({ planetSpecs }) => planetSpecs?.animation}s infinite linear;
`;

export { OrbitLine, PlanetBody, PlanetBodyContainer };
