import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppHeader = props => {
  const modelCreatorStep = props.modelCreatorStep;
  return (
    <div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ height: 60 }}
      >
        <Menu.Item key="1">
          <Link to="/">TensorFlex</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={`/MyImages`}>My Images</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={`/ImageLabeler/${modelCreatorStep}`}>Label Images</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/About">About</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default AppHeader;
