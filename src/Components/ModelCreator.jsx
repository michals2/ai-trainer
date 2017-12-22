import React from "react";
import { Route, Switch } from "react-router";

import ModelCreatorProgressContainer from "Containers/ModelCreatorProgressContainer";

import { modelCreationSteps } from "static/js/modelCreationSteps";

const rowStyle = {
  padding: 20,
  alignItems: "center",
  justifyContent: "center",
  display: "flex"
};

const ModelCreator = () => {
  return (
    <div>
      <ModelCreatorProgressContainer />
      <div style={rowStyle}>
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
    </div>
  );
};

export default ModelCreator;
