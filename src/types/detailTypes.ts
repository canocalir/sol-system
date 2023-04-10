import { RingProps } from "./ringTypes";

export type DetailPlanetProps = {
    planetType: string | unknown;
    ringSpecs?: RingProps;
    isDetail?: boolean;
    isOrbit?: boolean;
  };