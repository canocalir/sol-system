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
      return 325;
    case "earth":
      return 425;
  }
};

const handlePlanetAnimation = (planetType: string) => {
  switch (planetType) {
    case "mercury":
      return 15;
    case "venus":
      return 8;
    case "earth":
      return 7;
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

const OrbitCircle = styled.div<OrbitLineProps>`
  position: absolute;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  top: 0;
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
                left: 2rem;
                background-color: #50330d;
            `;
    } else if (planetType === "venus") {
      return `
                left: 4rem;
                background-color: #748f12;
            `;
    } else if (planetType === "earth") {
      return `
            left: 7rem;
            background-color: #1e72c0;
        `;
    }
  }};
`;

export { OrbitLine, OrbitCircle };
