import { combineReducers } from "redux";
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from "react-router-redux";

import modelCreator from "./modelCreatorReducer";
import myModels from "./myModelsReducer";

const rootReducer = combineReducers({
  modelCreator,
  myModels,
  router: routerReducer
});

export default rootReducer;
