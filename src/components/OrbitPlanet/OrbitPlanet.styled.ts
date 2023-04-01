import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import mars from "../../assets/2k_mars.jpg";
import jupiter from "../../assets/2k_jupiter.jpg";
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
  planetType: string;
};

const handlePlanetType = (planetType: string) => {
  switch (planetType) {
    case "mercury":
      return 400;
    case "venus":
      return 600;
    case "earth":
      return 800;
    case "mars":
      return 900;
    case "jupiter":
      return 1200;
    case "saturn":
      return 1300;
    case "uranus":
      return 1400;
    case "neptune":
      return 1500;
  }
};

const handlePlanetAnimation = (planetType: string) => {
  switch (planetType) {
    case "mercury":
      return 50;
    case "venus":
      return 80;
    case "earth":
      return 100;
    case "mars":
      return 120;
    case "jupiter":
      return 300;
    case "saturn":
      return 400;
    case "uranus":
      return 500;
    case "neptune":
      return 600;
  }
};

const OrbitLine = styled.div<OrbitLineProps>`
  width: ${({ planetType }) => handlePlanetType(planetType)}px;
  height: ${({ planetType }) => handlePlanetType(planetType)}px;
  border: 5px #30e3e9 dashed;
  border-radius: 50%;
  position: absolute;
  display: flex;
  align-items: flex-start;
  @media(max-width:864px){
   
  }
  -webkit-animation: ${PlanetRotation}
      ${({ planetType }) => handlePlanetAnimation(planetType)}s linear infinite,
    ${({ planetType }) => handlePlanetAnimation(planetType)}s infinite;
  animation: ${PlanetRotation}
      ${({ planetType }) => handlePlanetAnimation(planetType)}s linear infinite,
    ${({ planetType }) => handlePlanetAnimation(planetType)}s infinite;
  &:hover {
    border-color: #d2d1d4;
    cursor: pointer;
  }
`;

const PlanetBody = styled(motion.div)<OrbitLineProps>`
  border-radius: 50%;
  border: none;
  top: 0rem;
  transform: scaleX(0.4);
  position: absolute;
  ${flexWrapper("flex-start")};
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
               
                background-color: #50330d;
                width: 4rem;
                height: 4rem;
            `;
    } else if (planetType === "venus") {
      return `
                
                background-color: #748f12;
                width: 8rem;
                height: 8rem;
            `;
    } else if (planetType === "earth") {
      return `

             
                background-color: #1e72c0;
                width: 8.7rem;
                height: 8.7rem;
        `;
    } else if (planetType === "mars") {
      return `
                background: url(${mars});
                background-position: center;
                background-size: cover;
                overflow: hidden;
                width: 4.7rem;
                height: 4.7rem;
      `;
    } else if (planetType === "jupiter") {
      return `
            background: url(${jupiter});
            background-position: center;
            background-size: cover;
            overflow: hidden;
            width: 15rem;
            height: 15rem;
        `;
    } else if (planetType === "saturn") {
      return `
            background-color: #1e72c0;
            width: 13rem;
            height: 13rem;
        `;
    } else if (planetType === "uranus") {
      return `
            background-color: #1e72c0;
            width: 10rem;
            height: 10rem;
        `;
    } else if (planetType === "neptune") {
      return `
            width: 9rem;
            height: 9rem;
            background-color: #ffffff;
            `;
    }
  }};
`;

const PlanetBodyContainer = styled.div<OrbitLineProps>`
  animation: ${PlanetRotationCorrect}
    ${({ planetType }) => handlePlanetAnimation(planetType)}s infinite linear;
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
                
                width: 4rem;
                height: 4rem;
            `;
    } else if (planetType === "venus") {
      return `
                
                width: 8rem;
                height: 8rem;
            `;
    } else if (planetType === "earth") {
      return `

                
                width: 8.7rem;
                height: 8.7rem;
        `;
    } else if (planetType === "mars") {
      return `
                
                width: 4.7rem;
                height: 4.7rem;
      `;
    } else if (planetType === "jupiter") {
      return `
            
            width: 15rem;
            height: 15rem;
        `;
    } else if (planetType === "saturn") {
      return `
            
            width: 13rem;
            height: 13rem;
        `;
    } else if (planetType === "uranus") {
      return `
           
            width: 10rem;
            height: 10rem;
        `;
    } else if (planetType === "neptune") {
      return `
            
            width: 9rem;
            height: 9rem;
           
            `;
    }
  }}
`;

export { OrbitLine, PlanetBody, PlanetBodyContainer };
