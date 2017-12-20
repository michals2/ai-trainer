// React imports
import React from "react";
import { Route, Switch } from "react-router";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";

import { modelCreationSteps } from "static/js/modelCreationSteps";

const ModelCreator = () => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgressContainer />
      <Switch>
        {modelCreationSteps.map((step, i) =>
          <Route
            key={i}
            path={`/ModelCreator/${step.id}`}
            component={step.component}
          />
        )}
      </Switch>
    </div>
  );
};

export default ModelCreator;
