/* Library Imports */
import React from "react";
import { Layout, Menu } from "antd";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

/* Container/View Imports */
import ModelCreatorContainer from "Containers/ModelCreatorContainer";
import Home from "Components/Home";
import AppHeader from "Components/AppHeader";

/* Destructuring */
const { Header, Content, Footer } = Layout;

const App = () =>
  <Layout>
    <Layout>
      <Header className="header">
        <AppHeader />
      </Header>
      <Content style={{ margin: "60px", overflow: "initial" }}>
        <div style={{ padding: 40, background: "#fff" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/ModelCreator"
              component={ModelCreatorContainer}
            />
          </Switch>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Created by Luke Michals</Footer>
    </Layout>
  </Layout>;

export default App;
