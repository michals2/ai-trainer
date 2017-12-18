// React imports
import React from "react";
import { Route, Switch } from "react-router";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";
import LabelToolContainer from "Containers/LabelToolContainer";
import ModelExplorer from "Components/ModelExplorer";
import LabelSpecifier from "Components/LabelSpecifier";
import TrainModel from "Components/TrainModel";

const ModelCreator = () => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgressContainer />
      <Switch>
        <Route path="/ModelCreator/0" component={ModelExplorer} />
        <Route path="/ModelCreator/1" component={LabelSpecifier} />
        <Route path="/ModelCreator/2" component={LabelToolContainer} />
        <Route path="/ModelCreator/3" component={TrainModel} />
      </Switch>
    </div>
  );
};

export default ModelCreator;
