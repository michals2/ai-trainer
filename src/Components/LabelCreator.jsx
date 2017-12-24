import React from "react";
import { Route, Switch } from "react-router";

import LabelCreatorProgressContainer from "Containers/LabelCreatorProgressContainer";

import { labelCreationSteps } from "static/js/labelCreationSteps";

const rowStyle = {
  padding: 20,
  alignItems: "center",
  justifyContent: "center",
  display: "flex"
};

const LabelCreator = () => {
  return (
    <div>
      <LabelCreatorProgressContainer />
      <div style={rowStyle}>
        <Switch>
          {labelCreationSteps.map((step, i) =>
            <Route
              key={i}
              path={`/ImageLabeler/${step.id}`}
              component={step.component}
            />
          )}
        </Switch>
      </div>
    </div>
  );
};

export default LabelCreator;
