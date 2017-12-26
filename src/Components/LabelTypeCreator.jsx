// React imports
import React from "react";
import { Row, Col } from "antd";

import LabelTypeTable from "Components/LabelTypeTable";
import LabelTypeCreatorForm from "Components/LabelTypeCreatorForm";

const containerStyle = {
  display: "flex"
};
const itemStyle = {
  paddingLeft: 40,
  paddingRight: 40
};

const LabelTypeCreator = () => {
  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <LabelTypeCreatorForm />
      </div>
      <div style={itemStyle}>
        <LabelTypeTable />
      </div>
    </div>
  );
};

export default LabelTypeCreator;
