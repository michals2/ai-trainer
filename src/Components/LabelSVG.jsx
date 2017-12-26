import React, { Component } from "react";
import { returnLabelJSX } from "static/js/returnLabelJSX";

class LabelSVG extends Component {
  // props => {
  handleMouseDown = e => {
    console.log(this.refs);
    const dims = this.refs.svg.getBoundingClientRect();
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;

    this.props.actions.addLabel(
      { x, y, height: 50, width: 50 },
      this.props.state.labelTypes.activeLabelTypeId
    );
  };

  handleMouseMove = e => {
    if (!this.props.state.labels.activelyModifyingLabel) return;
    const dims = this.refs.svg.getBoundingClientRect();
    const x = e.clientX - dims.left;
    const y = e.clientY - dims.top;

    this.props.actions.modifyNewLabel({ x, y });
  };

  render() {
    const currImage = this.props.state.fileUploader.files[0];
    const { url, dims } = currImage;
    const { labelTypes } = this.props.state.labelTypes;
    const { labels } = this.props.state.labels;

    return (
      <div>
        <svg
          style={{ ...dims, border: "1px solid black" }}
          ref="svg"
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
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
  }
}

export default LabelSVG;
