// React imports
import React from "react";

import { Steps, Button, Icon } from "antd";
const ButtonGroup = Button.Group;
const Step = Steps.Step;

const ModelCreatorProgress = props => {
  return (
    <div>
      <Steps progressDot current={props.state.step} style={{ width: 600 }}>
        <Step title="Choose Type" />
        <Step title="Split Dataset" />
        <Step title="Label Dataset" />
        <Step title="Train Model" />
      </Steps>
      <ButtonGroup>
        <Button
          type="primary"
          onClick={props.actions.decrementStep}
          disabled={props.state.prevButtonDisabled}
        >
          <Icon type="left" />Previous
        </Button>
        <Button
          type="primary"
          onClick={props.actions.incrementStep}
          disabled={props.state.nextButtonDisabled}
        >
          Next<Icon type="right" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ModelCreatorProgress;