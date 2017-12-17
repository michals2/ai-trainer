// React imports
import React from "react";

import ModelCreatorProgress from "Components/ModelCreatorProgress";
import LabelTool from "Components/LabelTool";

const ModelCreator = props => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgress {...props} />
      <LabelTool {...props} />
    </div>
  );
};

export default ModelCreator;
