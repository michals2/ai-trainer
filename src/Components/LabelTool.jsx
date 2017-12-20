import React from "react";

import LabelToolNavBar from "Components/LabelToolNavBar";
import LabelSVG from "Components/LabelSVG";

const LabelTool = props =>
  <div>
    <LabelToolNavBar {...props} />
    <LabelSVG {...props} />
  </div>;

export default LabelTool;
