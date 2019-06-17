import React, { useLayoutEffect } from "react";

export function FullWidth({ children }) {
  return <div style={{ width: "100vw" }}>{children}</div>;
}
