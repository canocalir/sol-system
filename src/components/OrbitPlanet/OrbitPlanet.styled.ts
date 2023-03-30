import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import mars from "../../assets/2k_mars.jpg";
import jupiter from "../../assets/2k_jupiter.jpg"
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
`

const hidePlanetBehindSun = keyframes`
  0%{
    z-index: 998;
  }
  25%{
    z-index: -998;
  }
  100%{
    z-index: 998;
  }
`

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
  border-radius: 50%;
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

const PlanetZindex = styled.div<OrbitLineProps>`
${flexWrapper("center")};
position: absolute;
width: 100%;
height: 100%;
animation: ${hidePlanetBehindSun} ${({ planetType }) => handlePlanetAnimation(planetType)}s infinite;
` 

const OrbitCircle = styled(motion.div)<OrbitLineProps>`
  position: absolute;
  border-radius: 50%;
  border: none;
  top: 0rem;
  transform: scaleX(0.4);
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
               
                background-color: #50330d;
                width: 1rem;
                height: 1rem;
            `;
    } else if (planetType === "venus") {
      return `
                
                background-color: #748f12;
                width: 1.5rem;
                height: 1.5rem;
            `;
    } else if (planetType === "earth") {
      return `

             
                background-color: #1e72c0;
                width: 1.9rem;
                height: 1.9rem;
        `;
    } else if (planetType === "mars") {
      return `
                background: url(${mars});
                background-position: center;
                background-size: cover;
                overflow: hidden;
                width: 1.7rem;
                height: 1.7rem;
      `;
    } else if (planetType === "jupiter") {
      return `
            background: url(${jupiter});
            background-position: center;
            background-size: cover;
            overflow: hidden;
            width: 5rem;
            height: 5rem;
        `;
    } else if (planetType === "saturn") {
      return `
            background-color: #1e72c0;
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "uranus") {
      return `
            background-color: #1e72c0;
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "neptune") {
      return `
            width: 3.5rem;
            height: 3.5rem;
            background-color: #ffffff;
            `;
    }
  }};
`;

const OrbitCircleContainer = styled.div<OrbitLineProps>`
  animation: ${PlanetRotationCorrect} ${({ planetType }) => handlePlanetAnimation(planetType)}s infinite linear;
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
                
                width: 1rem;
                height: 1rem;
            `;
    } else if (planetType === "venus") {
      return `
                
                width: 1.5rem;
                height: 1.5rem;
            `;
    } else if (planetType === "earth") {
      return `

                
                width: 1.9rem;
                height: 1.9rem;
        `;
    } else if (planetType === "mars") {
      return `
                
                width: 1.7rem;
                height: 1.7rem;
      `;
    } else if (planetType === "jupiter") {
      return `
            
            width: 5rem;
            height: 5rem;
        `;
    } else if (planetType === "saturn") {
      return `
            
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "uranus") {
      return `
           
            width: 3.5rem;
            height: 3.5rem;
        `;
    } else if (planetType === "neptune") {
      return `
            
            width: 3.5rem;
            height: 3.5rem;
           
            `;
    }}}
`

export { OrbitLine, OrbitCircle, OrbitCircleContainer, PlanetZindex };
