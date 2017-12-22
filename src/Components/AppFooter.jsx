/* Library Imports */
import React from "react";
import { Layout, Icon } from "antd";
const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center", backgroundColor: "white" }}>
      <div>
        Created by<a href="http://lukemichals.com"> Luke Michals</a>
      </div>
      <div>
        <a href="https://github.com/michals2/tensorflex">
          <Icon type="github" style={{ fontSize: 24, color: "#1DA57A" }} />
        </a>
      </div>
    </Footer>
  );
};

export default AppFooter;
