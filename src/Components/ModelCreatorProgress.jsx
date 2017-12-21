// React imports
import React from "react";

import { Steps, Button, Icon } from "antd";

import { modelCreationStepNames } from "static/js/modelCreationSteps";
import { Row, Col } from "antd";

const ButtonGroup = Button.Group;
const Step = Steps.Step;

const ModelCreatorProgress = props => {
  return (
    <div>
      <Row type="flex" justify="center">
        <Col span={20}>
          {/* <ModelCreatorProgressContainer /> */}
          <Steps progressDot current={props.state.step} style={{ width: 600 }}>
            {modelCreationStepNames.map((stepName, i) =>
              <Step key={i} title={stepName} />
            )}
          </Steps>
        </Col>
      </Row>

      <Row type="flex" justify="space-around" align="middle">
        <Col span={10}>
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
        </Col>
      </Row>
    </div>
  );
};

export default ModelCreatorProgress;
