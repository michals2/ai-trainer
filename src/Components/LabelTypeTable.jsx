import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Shape",
    dataIndex: "shape",
    key: "shape"
  },
  {
    title: "Color",
    dataIndex: "color",
    key: "color"
  }
];

const LabelTypeTable = props => {
  console.log({ props });
  const dataSource = props.state.labelTypes.map(type => ({
    ...type,
    key: type.id
  }));
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default LabelTypeTable;
