import React from "react";
import image from "static/images/raccoon-1.jpg";

import LabelToolNavBar from "Components/LabelToolNavBar";

const LabelTool = props =>
  <div>
    <LabelToolNavBar {...props} />
    <svg style={{ height: 400, width: 600, border: "2px solid black" }}>
      <image href={image} height="400" width="600" x="0" y="0" />
      <circle cx="100" cy="100" r="25" />
    </svg>
  </div>;

export default LabelTool;
