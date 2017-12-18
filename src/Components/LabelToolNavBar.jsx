import React from "react";
import { Radio } from "antd";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const LabelToolNavBar = props => {
  return (
    <div>
      <RadioGroup
        defaultValue="0"
        onChange={e => {
          // console.log({ props });
          // props.actions.push("/foo");
          props.actions.setLabelType(e.target.value);
        }}
      >
        <RadioButton value="0">Raccoon</RadioButton>
        <RadioButton value="1">Human</RadioButton>
        <RadioButton value="2">Squirrel</RadioButton>
        <RadioButton value="3">Dog</RadioButton>
      </RadioGroup>
    </div>
  );
};
export default LabelToolNavBar;
