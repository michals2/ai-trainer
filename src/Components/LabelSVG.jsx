import React from "react";
import stockImage from "static/images/raccoon-1.jpg";

const LabelSVG = props => {
  const currImage = props.files.length > 0 ? props.files[0].url : stockImage;
  return (
    <div>
      <svg style={{ height: 400, width: 600, border: "2px solid black" }}>
        <image href={currImage} height="400" width="600" x="0" y="0" />
        <circle cx="100" cy="100" r="25" />
      </svg>
    </div>
  );
};

export default LabelSVG;
