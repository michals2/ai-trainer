import React from "react";
import { Layout, Menu } from "antd";

// Container imports
import ModelCreatorContainer from "Containers/ModelCreatorContainer";
import { Steps, Cascader, Icon, Button } from "antd";

// View imports
// import AppHeader from "Components/AppHeader/AppHeader";
// import AppFooter from "Components/AppFooter/AppFooter";

// Destructuring
const { Header, Content, Footer } = Layout;

const App = () =>
  <Layout>
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">My Models</Menu.Item>
          <Menu.Item key="2">Create Model</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: "60px", overflow: "initial" }}>
        <div style={{ padding: 40, background: "#fff" }}>
          <ModelCreatorContainer />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Luke Michals</Footer>
    </Layout>
  </Layout>;

export default App;
