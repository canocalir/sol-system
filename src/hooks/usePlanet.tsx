import { useEffect, useState } from "react";

export interface PlanetSpecsProps {
  name: string;
  animation: number;
  orbitDistance: number;
  width: number;
  height: number;
  position: {
    top: number | null;
    right: number | null;
    bottom: number | null;
    left: number | null;
  }
}

const usePlanet = (planetName: string) => {
  const [planetSpecs, setPlanetSpecs] = useState<PlanetSpecsProps>({
    name: "",
    animation: 0,
    orbitDistance: 0,
    width: 0,
    height: 0,
    position: {
      top: null,
      right: 2,
      bottom: 2,
      left: 0
    }
  });
  useEffect(() => {
    switch (planetName) {
      case "mercury":
        return setPlanetSpecs({
          name: "mercury",
          animation: 30,
          orbitDistance: 450,
          width: 4,
          height: 4,
          position: {
            top: null,
            right: 2,
            bottom: 2,
            left: null
          }
        });
      case "venus":
        return setPlanetSpecs({
          name: "venus",
          animation: 80,
          orbitDistance: 650,
          width: 8,
          height: 8,
          position: {
            top: null,
            right: 1,
            bottom: 5,
            left: null
          }
        });
      case "earth":
        return setPlanetSpecs({
          name: "earth",
          animation: 100,
          orbitDistance: 800,
          width: 8.7,
          height: 8.7,
          position: {
            top: null,
            right: null,
            bottom: 5,
            left: 1.5
          }
        });
      case "mars":
        return setPlanetSpecs({
          name: "mars",
          animation: 120,
          orbitDistance: 900,
          width: 4.7,
          height: 4.7,
          position: {
            top: null,
            right: 6,
            bottom: 5,
            left: null
          }
        });
      case "jupiter":
        return setPlanetSpecs({
          name: "jupiter",
          animation: 300,
          orbitDistance: 1200,
          width: 15,
          height: 15,
          position: {
            top: 0,
            right: -2,
            bottom: 5,
            left: null
          }
        });
      case "saturn":
        return setPlanetSpecs({
          name: "saturn",
          animation: 400,
          orbitDistance: 1300,
          width: 13,
          height: 13,
          position: {
            top: null,
            right: null,
            bottom: 4,
            left: 8
          }
        });
      case "uranus":
        return setPlanetSpecs({
          name: "uranus",
          animation: 500,
          orbitDistance: 1400,
          width: 10,
          height: 10,
          position: {
            top: 4,
            right: null,
            bottom: 4,
            left: 12
          }
        });
      case "neptune":
        return setPlanetSpecs({
          name: "neptune",
          animation: 600,
          orbitDistance: 1500,
          width: 9,
          height: 9,
          position: {
            top: null,
            right: 14,
            bottom: 5,
            left: null
          }
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
            left: null
          }
        });
    }
  }, [planetName]);
  return { planetSpecs };
};

export default usePlanet;
