import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AppHeader = () =>
  <div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/MyModels">My Models</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/ModelCreator">Create Model</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/About">About</Link>
      </Menu.Item>
    </Menu>
  </div>;

export default AppHeader;
