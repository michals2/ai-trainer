// React imports
import React from "react";
import { Cascader } from "antd";

import options from "static/js/modelTypes";
// const options = ;

function onChange(value, selectedOptions) {
  console.log(value, selectedOptions);
}

const ModelExplorer = () => {
  return (
    <div>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
        showSearch
      />
    </div>
  );
};

export default ModelExplorer;
