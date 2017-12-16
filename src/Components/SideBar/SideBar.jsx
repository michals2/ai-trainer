// Library imports
import React from "react";
import { Layout, Icon, Menu } from "antd";

// Library destructuring
const { Sider } = Layout;

const SideBar = () =>
  <Sider
    style={{ overflow: "auto", height: "100vh", position: "fixed", left: 0 }}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">
        <Icon type="appstore-o" />
        <span className="nav-text">Feed</span>
      </Menu.Item>

      <Menu.Item key="2">
        <Icon type="user" />
        <span className="nav-text">Profile</span>
      </Menu.Item>
    </Menu>
  </Sider>;

export default SideBar;
