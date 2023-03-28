import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const PlanetRotation = keyframes`
    100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

type OrbitLineProps = {
  planetType: string;
};

const handlePlanetType = (planetType: string) => {
  switch (planetType) {
    case "mercury":
      return 225;
    case "venus":
      return 295;
    case "earth":
      return 375;
    case "mars":
      return 445;
    case "jupiter":
      return 625;
    case "saturn":
      return 725;
    case "uranus":
      return 825;
    case "neptune":
      return 925;
  }
};

const handlePlanetAnimation = (planetType: string) => {
  switch (planetType) {
    case "mercury":
      return 20;
    case "venus":
      return 30;
    case "earth":
      return 50;
    case "mars":
      return 60;
    case "jupiter":
      return 70;
    case "saturn":
      return 80;
    case "uranus":
      return 100;
    case "neptune":
      return 130;
  }
};

const OrbitLine = styled.div<OrbitLineProps>`
  width: ${({ planetType }) => handlePlanetType(planetType)}px;
  height: ${({ planetType }) => handlePlanetType(planetType)}px;
  border: 1px #4a437f solid;
  border-radius: 100%;
  position: absolute;
  -webkit-animation: ${PlanetRotation}
    ${({ planetType }) => handlePlanetAnimation(planetType)}s linear infinite;
  animation: ${PlanetRotation}
    ${({ planetType }) => handlePlanetAnimation(planetType)}s linear infinite;
  &:hover {
    border-color: #9289d4;
    cursor: pointer;
  }
`;

const OrbitCircle = styled(motion.div)<OrbitLineProps>`
  position: absolute;
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  top: 0;
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
                right: 4rem;
                background-color: #50330d;
                width: 1rem;
                height: 1rem;
            `;
    } else if (planetType === "venus") {
      return `
                right: 5rem;
                background-color: #748f12;
                width: 1.5rem;
                height: 1.5rem;
            `;
    } else if (planetType === "earth") {
      return `

                right: 6rem;
                background-color: #1e72c0;
                width: 1.9rem;
                height: 1.9rem;
        `;
    } else if (planetType === "mars") {
      return `
                right: 2.5rem;
                top: 4rem;
                background-color: #b85d41;
                width: 1.7rem;
                height: 1.7rem;
      `;
    } else if (planetType === "jupiter") {
      return `
            right: 10rem;
            top: 0rem;
            background-color: #f1c461;
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "saturn") {
      return `
            right: 12rem;
            background-color: #1e72c0;
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "uranus") {
      return `
            right: 14rem;
            background-color: #1e72c0;
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "neptune") {
      return `
            right: 16rem;
            width: 3.5rem;
            height: 3.5rem;
            background-color: #ffffff;
    
            `;
    }
  }};
`;

export { OrbitLine, OrbitCircle };
