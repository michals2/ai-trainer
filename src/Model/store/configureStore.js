import { createStore, applyMiddleware, combineReducers } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";
import { routerActions } from "react-router-redux/actions";

export default function configureStore(history) {
  const middleware = routerMiddleware(history);
  return createStore(
    combineReducers({
      ...rootReducer,
      router: routerReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, middleware)
  );
}
