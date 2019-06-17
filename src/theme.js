import React from "react";
import { future as theme } from "mdx-deck/themes";
import { Code } from './Code'

const fontFamily =
  'Roboto, sans-serif, "Noto Sans Japanese", "YuGothic", "Yu Gothic"';
const header = {
  "text-transform": "none"
};

export default {
  ...theme,
  components: {
    strong: props => (
      <strong {...props} style={{ borderBottom: "6px solid #3E8A5F" }} />
    ),
    code: Code
  },
  colors: {
    ...theme.colors,
    background: "#002C2B"
  },
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
  },
  i: {
    fontSize: "24px"
  },
  ul: {
    paddingInlineStart: 60
  }
  // FIXME: liの階層ごとに小さくしたい。。。
  // "li>li": {
  //   fontSize: "0.8em"
  // }
};
