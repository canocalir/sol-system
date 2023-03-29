import { motion } from "framer-motion";
import styled from "styled-components";
import mars from "../../assets/2k_mars.jpg"

type DetailPlanetProps<T> = {
  planetType: T | undefined;
};

const detailPlanetHandle = (planet: string | undefined) => {
  switch (planet) {
    case "mercury":
      return "#ffffff";
    case "venus":
      return 295;
    case "earth":
      return 375;
    case "mars":
      return "#ffffff";
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

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps<string>>`
  background-color: ${({ planetType }) => detailPlanetHandle(planetType)};
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
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
                background: url(${mars});
                background-position: top;
                background-size: cover;
      `;
    } else if (planetType === "jupiter") {
      return `
            background-color: #f1c461;
            
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

export { DetailPlanetCircle };
