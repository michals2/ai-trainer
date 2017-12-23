import React from "react";
import { Table } from "antd";

const dataSource = [
  {
    key: "1",
    Name: "Human",
    Shape: "Rectangle"
  },
  {
    key: "2",
    Name: "Dog",
    Shape: "Circle"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name"
  },
  {
    title: "Shape",
    dataIndex: "Shape",
    key: "Shape"
  }
];

const LabelTable = props => {
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default LabelTable;
