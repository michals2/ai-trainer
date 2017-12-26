import React from "react";
import { returnLabelJSX } from "static/js/returnLabelJSX";

// const stockFile = { url: stockImage, dims: { width: "650", height: "417" } };
// console.log({ stockImage });

const LabelSVG = props => {
  const handleMouseDown = e => {
    // const dims = e.target.getBoundingClientRect();
    // const x = e.clientX - dims.left;
    // const y = e.clientY - dims.top;
    // props.actions.addLabel({ x, y, height: 0, width: 0 });
  };

  const handleMouseMove = e => {
    // const dims = e.target.getBoundingClientRect();
    // const { height, width } = dims;
    // const x = e.clientX - dims.left;
    // const y = e.clientY - dims.top;
    // console.log({ height, width, x, y });
    // props.actions.modifyLabel({})
  };

  const currImage = props.state.fileUploader.files[0];
  const { url, dims } = currImage;
  const { labelTypes } = props.state.labelTypes;
  const { labels } = props.state.labels;

  console.log({ labels });

  return (
    <div>
      <svg
        style={{ ...dims, border: "1px solid black" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <image href={url} {...dims} x="0" y="0" />
        {labels.map(label => {
          const shape = labelTypes.find(
            labelType => labelType.id === label.labelTypeId
          ).shape;
          const jsx = returnLabelJSX(label, shape);
          return jsx;
        })}
      </svg>
    </div>
  );
};

export default LabelSVG;
