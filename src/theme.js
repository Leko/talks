import { future as theme } from "mdx-deck/themes";

console.log(theme);

export default {
  ...theme,
  font: 'Roboto, sans-serif, "Noto Sans Japanese", "YuGothic", "Yu Gothic"',
  quote: {
    "border-left": "6px solid #888",
    paddingLeft: "20px",
    fontSize: "0.8em"
  },
  pre: {
    fontSize: "24px"
  }
};
