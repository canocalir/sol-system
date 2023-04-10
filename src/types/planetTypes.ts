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
  };
}

export type OrbitPlanetProps = {
  planet: string;
};

export type Sol = {
  sunImage: string | unknown;
  planetSpecs?: PlanetSpecsProps;
};
