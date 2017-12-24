/* Library Imports */
import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router";

/* Container/View Imports */
import LabelCreator from "Components/LabelCreator";
import Home from "Components/Home";
import AppHeaderContainer from "Containers/AppHeaderContainer";
import MyImages from "Components/MyImages";
import About from "Components/About";
import AppFooter from "Components/AppFooter";

/* Destructuring */
const { Header, Content } = Layout;

const App = () => {
  // console.log(this)
  return (
    <Layout style={{ height: "100vh" }}>
      <Layout>
        <Header className="header">
          <AppHeaderContainer />
        </Header>
        <Content style={{ margin: 20, overflow: "initial" }}>
          <div style={{ padding: 40, background: "#fff" }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/MyImages" component={MyImages} />
              <Route path="/ImageLabeler" component={LabelCreator} />
              <Route path="/About" component={About} />
            </Switch>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default App;
