export const rings = (
    width: number | unknown,
    height: number | unknown,
    top: number | unknown,
    left: number | unknown
  ) => {
    return `
        width: ${width}vw;
        height: ${height}vw;
        border-radius: 50%;
        top: ${top}%;
        left: ${left}%; 
        position: absolute;
        z-index: 2;
      `;
  };
  
  export const ringsFix = (
    width: number | unknown,
    height: number | unknown,
    top: number | unknown,
    left: number | unknown
  ) => {
    return `
        background-size: cover;
        width: ${width}vw;
        height: ${height}vw;
        position: absolute;
        top: ${top}vw;
        left: ${left}vw; 
        z-index: 3;
      `;
  };