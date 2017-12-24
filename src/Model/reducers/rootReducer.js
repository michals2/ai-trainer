import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import labelCreator from "./labelCreatorReducer/labelCreatorReducer";
// import myModels from "./myModelsReducer";

const rootReducer = combineReducers({
  labelCreator,
  // myModels,
  router: routerReducer
});

export default rootReducer;
