import React from "react";
import { Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const LabelToolNavBar = props => {
  const handleChange = e => {
    props.actions.setActiveLabelTypeId(e.target.value);
  };

  return (
    <div>
      <RadioGroup
        value={props.state.labelTypes.activeLabelTypeId}
        onChange={handleChange}
      >
        {props.state.labelTypes.labelTypes.map(labelType =>
          <RadioButton value={labelType.id} key={labelType.id}>
            {labelType.name}
          </RadioButton>
        )}
      </RadioGroup>
    </div>
  );
};
export default LabelToolNavBar;
