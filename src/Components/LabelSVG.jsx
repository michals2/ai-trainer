import React from "react";
import stockImage from "static/images/raccoon-1.jpg";
import { returnLabelJSX } from "static/js/returnLabelJSX";

const stockFile = { url: stockImage, dims: { width: "650", height: "417" } };
console.log({ stockImage });

const LabelSVG = props => {
  const handleMouseDown = e => {
    const dims = e.target.getBoundingClientRect();
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;

    props.actions.addLabel({ x, y, height: 0, width: 0 });
  };

  const handleMouseMove = e => {
    const dims = e.target.getBoundingClientRect();
    const { height, width } = dims;
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;
    console.log({ height, width, x, y });

    // props.actions.modifyLabel({})
  };

  const currImage = props.files.length > 0 ? props.files[0] : stockFile;
  const url = currImage.url;
  const { height, width } = currImage.dims;
  const { labelTypes } = props;

  return (
    <div>
      <svg
        style={{ ...currImage.dims, border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <image href={url} width={width} height={height} x="0" y="0" />
        {props.labels.map(label => {
          const shape = labelTypes[label.labelTypeId - 1].shape;
          return returnLabelJSX(label, shape);
        })}
      </svg>
    </div>
  );
};

export default LabelSVG;
