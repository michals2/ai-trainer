// React imports
import React from "react";

import { Steps, Button, Icon } from "antd";

import { modelCreationStepNames } from "static/js/modelCreationSteps";

const ButtonGroup = Button.Group;
const Step = Steps.Step;

const ModelCreatorProgress = props => {
  return (
    <div>
      <Steps progressDot current={props.state.step} style={{ width: 600 }}>
        {modelCreationStepNames.map((stepName, i) =>
          <Step key={i} title={stepName} />
        )}
      </Steps>
      <ButtonGroup>
        <Button
          type="primary"
          onClick={() => {
            props.actions.push(`${props.state.step - 1}`);
            props.actions.decrementStep();
          }}
          disabled={props.state.prevButtonDisabled}
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
        >
          Next<Icon type="right" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ModelCreatorProgress;
