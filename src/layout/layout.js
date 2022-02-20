import colors from "./colors.js";

console.log("colors", colors);
const box = `
 border: 1px solid ${colors.sectionBorder};
 box-shadow: 0 1px 2px 0 ${colors.sectionBorder};
 border-radius: 6px;
`;

export const layout = {
  colors,
  box,
};
