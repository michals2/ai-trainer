import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import modelCreatorProgress from "Model/reducers/modelCreatorReducer/modelCreatorProgressReducer";

const modelCreatorReducer = combineReducers({
  modelCreatorProgress
});

export default modelCreatorReducer;
