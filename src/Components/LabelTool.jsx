import React from "react";
import { Route, Switch } from "react-router";

import LabelToolNavBar from "Components/LabelToolNavBar";
import LabelSVG from "Components/LabelSVG";

const LabelTool = props =>
  <div>
    <LabelToolNavBar {...props} />
    <LabelSVG {...props} />
  </div>;

export default LabelTool;
