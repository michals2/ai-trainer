// Library imports
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { LocaleProvider } from "antd";
import en_US from "antd/lib/locale-provider/en_US";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import createHistory from "history/createBrowserHistory";
import { createStore, combineReducers, applyMiddleware } from "redux";

// Model imports
import configureStore from "Model/store/configureStore";
import rootReducer from "Model/reducers/rootReducer";
import modelCreator from "Model/reducers/modelCreatorReducer";
import myModels from "Model/reducers/myModelsReducer";

// View imports
import App from "Components/App/App";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = configureStore();

const store = createStore(
  combineReducers({
    modelCreator,
    myModels,
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

console.log({ store, history });

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
