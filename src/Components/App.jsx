/* Library Imports */
import React from "react";
import { Layout, Menu } from "antd";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

/* Container/View Imports */
import ModelCreator from "Components/ModelCreator";
import Home from "Components/Home";
import AppHeaderContainer from "Containers/AppHeaderContainer";

/* Destructuring */
const { Header, Content, Footer } = Layout;

const App = () => {
  // console.log(this)
  return (
    <Layout>
      <Layout>
        <Header className="header">
          <AppHeaderContainer />
        </Header>
        <Content style={{ margin: "60px", overflow: "initial" }}>
          <div style={{ padding: 40, background: "#fff" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ModelCreator" component={ModelCreator} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Created by Luke Michals</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
