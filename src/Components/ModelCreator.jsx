// React imports
import React from "react";
import { Route, Switch } from "react-router";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";
import LabelToolContainer from "Containers/LabelToolContainer";

const ModelCreator = () => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgressContainer />
      <Switch>
        <Route path="/ModelCreator/2" component={LabelToolContainer} />
      </Switch>
    </div>
  );
};

export default ModelCreator;
