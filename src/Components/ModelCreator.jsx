// React imports
import React from "react";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";
import LabelTool from "Components/LabelTool";

const ModelCreator = props => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgressContainer />
      <LabelTool {...props} />
    </div>
  );
};

export default ModelCreator;
