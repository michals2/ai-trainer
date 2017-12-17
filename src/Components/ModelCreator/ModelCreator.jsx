// React imports
import React from "react";

import ModelCreatorProgress from "Components/ModelCreatorProgress/ModelCreatorProgress";

const ModelCreator = props => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgress {...props} />
    </div>
  );
};

export default ModelCreator;
