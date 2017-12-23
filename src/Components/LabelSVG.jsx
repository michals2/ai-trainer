import React, { Component } from "react";
import stockImage from "static/images/raccoon-1.jpg";

const stockFile = { url: stockImage, dims: { width: "650", height: "417" } };
console.log({ stockImage });

const handleMouseDown = e => {
  const dims = e.target.getBoundingClientRect();
  const { height, width } = dims;
  const x = e.clientX - dims.left;
  const y = e.clientY - dims.top;
  console.log({ height, width, x, y });
};

const findLabelJSX = label => {
  const { key } = label;
  switch (label.shape) {
    case "Rectangle":
      let { x, y, height, width } = label;
      return (
        <rect
          key={key}
          x={x}
          y={y}
          height={height}
          width={width}
          style={{ fill: "none", stroke: "red", strokeWidth: 2 }}
        />
      );
    case "Circle":
      let { cx, cy, r } = label;
      return (
        <circle
          key={key}
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

class LabelSVG extends Component {
  constructor(props) {
    super(props);
    const currImage = props.files.length > 0 ? props.files[0] : stockFile;
    this.state = {
      currImage,
      labels: [
        {
          key: "1",
          shape: "Circle",
          cx: "100",
          cy: "200",
          r: "25"
        },
        {
          key: "2",
          shape: "Rectangle",
          x: "300",
          y: "200",
          height: "200",
          width: "33"
        }
      ]
    };
  }
  render() {
    const currImage = this.state.currImage;
    const url = currImage.url;
    const { height, width } = currImage.dims;
    return (
      <div>
        <svg
          style={{ ...this.state.currImage.dims, border: "1px solid black" }}
          onMouseDown={handleMouseDown}
        >
          <image href={url} width={width} height={height} x="0" y="0" />
          {this.state.labels.map(label => findLabelJSX(label))}
        </svg>
      </div>
    );
  }
}

export default LabelSVG;
