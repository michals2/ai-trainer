import React from "react";
import { returnLabelJSX } from "static/js/returnLabelJSX";

const LabelSVG = props => {
  const handleMouseDown = e => {
    const dims = e.target.getBoundingClientRect();
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;
    props.actions.addLabel(
      { x, y, height: 0, width: 0 },
      props.state.labelTypes.activeLabelTypeId
    );
  };

  const handleMouseMove = e => {
    if (!props.state.labels.activelyModifyingLabel) return;
    const dims = e.target.getBoundingClientRect();
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;
    props.actions.modifyNewLabel({ x, y });
  };

  const currImage = props.state.fileUploader.files[0];
  const { url, dims } = currImage;
  const { labelTypes } = props.state.labelTypes;
  const { labels } = props.state.labels;

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
