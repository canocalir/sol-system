import { useEffect, useState } from "react";
import { PlanetSpecsProps } from "../types/planetTypes";

const usePlanet = (planetName: unknown) => {
  const [planetSpecs, setPlanetSpecs] = useState<
    PlanetSpecsProps | undefined
  >();
  useEffect(() => {
    switch (planetName) {
      case "mercury":
        return setPlanetSpecs({
          name: "mercury",
          animation: 30,
          orbitDistance: 45,
          width: 4,
          height: 4,
          position: {
            top: null,
            right: 7,
            bottom: 2,
            left: null,
          },
        });
      case "venus":
        return setPlanetSpecs({
          name: "venus",
          animation: 80,
          orbitDistance: 65,
          width: 8,
          height: 8,
          position: {
            top: null,
            right: 10,
            bottom: 2,
            left: null,
          },
        });
      case "earth":
        return setPlanetSpecs({
          name: "earth",
          animation: 100,
          orbitDistance: 80,
          width: 9,
          height: 9,
          position: {
            top: null,
            right: null,
            bottom: 2,
            left: 15,
          },
        });
      case "mars":
        return setPlanetSpecs({
          name: "mars",
          animation: 120,
          orbitDistance: 90,
          width: 8,
          height: 8,
          position: {
            top: null,
            right: 17,
            bottom: 2,
            left: null,
          },
        });
      case "jupiter":
        return setPlanetSpecs({
          name: "jupiter",
          animation: 300,
          orbitDistance: 120,
          width: 15,
          height: 15,
          position: {
            top: 0,
            right: null,
            bottom: 2,
            left: 26,
          },
        });
      case "saturn":
        return setPlanetSpecs({
          name: "saturn",
          animation: 400,
          orbitDistance: 130,
          width: 13,
          height: 13,
          position: {
            top: null,
            right: null,
            bottom: 2,
            left: 27,
          },
        });
      case "uranus":
        return setPlanetSpecs({
          name: "uranus",
          animation: 500,
          orbitDistance: 140,
          width: 10,
          height: 10,
          position: {
            top: 4,
            right: null,
            bottom: 2,
            left: 30,
          },
        });
      case "neptune":
        return setPlanetSpecs({
          name: "neptune",
          animation: 600,
          orbitDistance: 150,
          width: 9,
          height: 9,
          position: {
            top: null,
            right: 40,
            bottom: 2,
            left: null,
          },
        });
      case "sun":
        return setPlanetSpecs({
          name: "sun",
          animation: 0,
          orbitDistance: 0,
          width: 25,
          height: 25,
          position: {
            top: null,
            right: null,
            bottom: null,
            left: null,
          },
        });
    }
  }, [planetName]);
  return { planetSpecs };
};

export default usePlanet;
