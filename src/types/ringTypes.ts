export interface RingProps {
    orbit: {
      width?: number;
      height?: number;
      borderWidth?: number;
      top?: number;
      left?: number;
      fix: {
        width?: number;
        height?: number;
        top?: number | null;
        left?: number | null;
      };
    };
    detail: {
      width?: number;
      height?: number;
      borderWidth?: number;
      top?: number;
      left?: number;
      fix: {
        width: number;
        height: number;
        top?: number | null,
        left?: number | null
      };
    };
  }