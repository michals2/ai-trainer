// React imports
import React from "react";

import LabelTypeTable from "Components/LabelTypeTable";
import LabelTypeCreatorForm from "Components/LabelTypeCreatorForm";

const containerStyle = {
  display: "flex"
};
const itemStyle = {
  paddingLeft: 40,
  paddingRight: 40
};

const LabelTypeCreator = props => {
  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <LabelTypeCreatorForm {...props} />
      </div>
      <div style={itemStyle}>
        <LabelTypeTable {...props} />
      </div>
    </div>
  );
};

export default LabelTypeCreator;
