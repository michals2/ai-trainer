// React imports
import PropTypes from "prop-types";
import React from "react";

import { Steps, Cascader, Button, Icon } from "antd";
const ButtonGroup = Button.Group;
const Step = Steps.Step;

const ModelCreator = props => {
  console.log({ props });
  return (
    <div style={{ height: 500 }}>
      <Steps progressDot current={props.state.step} style={{ width: 600 }}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </Steps>
      <ButtonGroup>
        <Button type="primary" onClick={props.actions.decrementStep}>
          <Icon type="left" />Previous
        </Button>
        <Button type="primary" onClick={props.actions.incrementStep}>
          Next<Icon type="right" />
        </Button>
      </ButtonGroup>
    </div>
  );
};

ModelCreator.propTypes = {
  // feedItems: PropTypes.array
};

export default ModelCreator;
