import React from "react";

export const returnLabelJSX = (label, shape) => {
  const { id } = label;

  switch (shape) {
    case "Rectangle":
      let { x, y, height, width } = label.dims;
      return (
        <rect
          key={id}
          x={x}
          y={y}
          height={height}
          width={width}
          style={{ fill: "none", stroke: "red", strokeWidth: 2 }}
        />
      );
    case "Circle":
      let { cx, cy, r } = label.dims;
      return (
        <circle
          key={id}
          cx={cx}
          cy={cy}
          r={r}
          style={{ fill: "none", stroke: "blue", strokeWidth: 2 }}
        />
      );
    default:
      return "something went wrong";
  }
};
