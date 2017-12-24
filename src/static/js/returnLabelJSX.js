import React from "react";

export const returnLabelJSX = label => {
  const { id } = label;
  switch (label.labelTypeId) {
    case 1:
      let { x, y, height, width } = label;
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
    case 2:
      let { cx, cy, r } = label;
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
