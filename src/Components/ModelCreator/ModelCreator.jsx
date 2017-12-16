// React imports
import React from "react";
import { Steps, Cascader, Button, Icon } from "antd";

import ModelCreatorProgress from "Components/ModelCreatorProgress/ModelCreatorProgress";

const ButtonGroup = Button.Group;
const Step = Steps.Step;

const ModelCreator = props => {
  return (
    <div style={{ height: 500 }}>
      <ModelCreatorProgress {...props} />
    </div>
  );
};

export default ModelCreator;
