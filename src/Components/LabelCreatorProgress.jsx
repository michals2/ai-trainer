// React imports
import React from "react";

import { Steps, Button, Icon } from "antd";

import { labelCreationStepNames } from "static/js/labelCreationSteps";

const ButtonGroup = Button.Group;
const Step = Steps.Step;

const buttonStyle = { width: 150 };
const rowStyle = {
  padding: 20,
  alignItems: "center",
  justifyContent: "center",
  display: "flex"
};

const ModelCreatorProgress = props => {
  return (
    <div>
      <div style={rowStyle}>
        <Steps progressDot current={props.state.step} size="small">
          {labelCreationStepNames.map((stepName, i) =>
            <Step key={i} title={stepName} />
          )}
        </Steps>
      </div>

      <div style={rowStyle}>
        <ButtonGroup>
          <Button
            type="primary"
            onClick={() => {
              props.actions.push(`${props.state.step - 1}`);
              props.actions.decrementStep();
            }}
            disabled={props.state.prevButtonDisabled}
            style={buttonStyle}
          >
            <Icon type="left" />Previous
          </Button>
          <Button
            type="primary"
            onClick={() => {
              props.actions.push(`${props.state.step + 1}`);
              props.actions.incrementStep();
            }}
            disabled={props.state.nextButtonDisabled}
            style={buttonStyle}
          >
            Next<Icon type="right" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ModelCreatorProgress;
