import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import modelCreatorProgress from "./modelCreatorProgressReducer";
import labelTool from "./labelToolReducer";

const modelCreatorReducer = combineReducers({
  modelCreatorProgress,
  labelTool
});

export default modelCreatorReducer;
