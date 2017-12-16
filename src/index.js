// Library imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import en_US from "antd/lib/locale-provider/en_US";

// Model imports
import configureStore from "Model/store/configureStore";

// View imports
import App from "Components/App/App";

const store = configureStore();

render(
  <LocaleProvider locale={en_US}>
    <Provider store={store}>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById("root")
);
