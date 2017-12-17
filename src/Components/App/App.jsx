import React from "react";
import { Layout, Menu } from "antd";
import { Route } from "react-router";
import { Link } from "react-router-dom";

// Container imports
import ModelCreatorContainer from "Containers/ModelCreatorContainer";

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
          <Menu.Item key="1">
            <Link to="/mymodels">My Models</Link>
          </Menu.Item>

          <Menu.Item key="2">Create Model</Menu.Item>
          <Menu.Item key="3">About</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ margin: "60px", overflow: "initial" }}>
        <div style={{ padding: 40, background: "#fff" }}>
          <Route exact path="/" component={ModelCreatorContainer} />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Luke Michals</Footer>
    </Layout>
  </Layout>;

export default App;
