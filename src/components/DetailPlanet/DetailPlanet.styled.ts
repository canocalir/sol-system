import { motion } from "framer-motion";
import styled from "styled-components";
import earth from "../../assets/2k_earth_daymap.jpg";
import venus from "../../assets/2k_venus_surface.jpg";
import uranus from "../../assets/2k_uranus.jpg";
import neptune from "../../assets/2k_neptune.jpg";
import mercury from "../../assets/2k_mercury.jpg";
import mars from "../../assets/2k_mars.jpg";
import jupiter from "../../assets/2k_jupiter.jpg";
import saturn from "../../assets/2k_saturn.jpg";

type DetailPlanetProps<T> = {
  planetType: T | undefined;
};

const DetailPlanetCircle = styled(motion.div)<DetailPlanetProps<string>>`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  ${({ planetType }) => {
    if (planetType === "mercury") {
      return `
      background: url(${mercury});
      background-position: top;
      background-size: cover;
            `;
    } else if (planetType === "venus") {
      return `
      background: url(${venus});
      background-position: top;
      background-size: cover;
            `;
    } else if (planetType === "earth") {
      return `

      background: url(${earth});
      background-position: top;
      background-size: cover;
        `;
    } else if (planetType === "mars") {
      return `
                background: url(${mars});
                background-position: top;
                background-size: cover;
      `;
    } else if (planetType === "jupiter") {
      return `
              background: url(${jupiter});
              background-position: top;
              background-size: cover;
            
        `;
    } else if (planetType === "saturn") {
      return `
      background: url(${saturn});
      background-position: top;
      background-size: cover;
        `;
    } else if (planetType === "uranus") {
      return `
      background: url(${uranus});
      background-position: top;
      background-size: cover;
        `;
    } else if (planetType === "neptune") {
      return `
      background: url(${neptune});
      background-position: top;
      background-size: cover;
            `;
    }
  }};
`;

export { DetailPlanetCircle };
