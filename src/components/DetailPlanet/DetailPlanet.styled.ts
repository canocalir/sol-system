import { motion } from "framer-motion";
import styled from "styled-components";

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
`;

export { DetailPlanetCircle };
