import React from "react";
import stockImage from "static/images/raccoon-1.jpg";

const stockFile = { url: stockImage, dims: { width: "650", height: "417" } };
console.log({ stockImage });

// const handleMouseDown = e => {
//   console.log(e.target);
// };

const handleMouseDown = e => {
  const dims = e.target.getBoundingClientRect();
  const { height, width } = dims;
  const x = e.clientX - dims.left;
  const y = e.clientY - dims.top;
  console.log({ height, width, x, y });
};

const findImageDims = file => {
  if (!file) return { width: "650", height: "417" };
  else return { width: file.dims.width, height: file.dims.height };
};

const LabelSVG = props => {
  const currImage = props.files.length > 0 ? props.files[0] : stockFile;
  const { height, width } = findImageDims(currImage);
  console.log({ currImage });
  return (
    <div>
      <svg
        style={{ height, width, border: "1px solid black" }}
        onMouseDown={handleMouseDown}
      >
        <image href={currImage.url} width={width} height={height} x="0" y="0" />
        <circle cx="100" cy="100" r="25" />
        <rect
          x="100"
          y="100"
          height="200"
          width="33"
          style={{ fill: "none", stroke: "red", strokeWidth: 2 }}
        />
      </svg>
    </div>
  );
};

export default LabelSVG;
