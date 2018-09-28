import { future as theme } from "mdx-deck/themes";

const fontFamily =
  'Roboto, sans-serif, "Noto Sans Japanese", "YuGothic", "Yu Gothic"';
const header = {
  "text-transform": "none"
};

export default {
  ...theme,
  h1: {
    ...(theme.h1 || {}),
    ...header
  },
  h2: {
    ...(theme.h2 || {}),
    ...header
  },
  font: fontFamily,
  quote: {
    borderLeft: "6px solid #888",
    paddingLeft: "20px",
    fontSize: "0.8em",
    fontWeight: "normal"
  },
  pre: {
    fontSize: "24px"
  },
  code: {
    fontFamily
  }
};
