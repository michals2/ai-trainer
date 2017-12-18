// React imports
import React from "react";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";
import LabelToolContainer from "Containers/LabelToolContainer";

const ModelCreator = () => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgressContainer />
      <LabelToolContainer />
    </div>
  );
};

export default ModelCreator;
