// Library imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import en_US from "antd/lib/locale-provider/en_US";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

// Model imports
import configureStore from "Model/store/configureStore";

// View imports
import App from "Components/App/App";

const history = createHistory();
const store = configureStore(history);

render(
  <LocaleProvider locale={en_US}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </LocaleProvider>,
  document.getElementById("root")
);
