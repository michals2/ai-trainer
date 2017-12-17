import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import modelCreator from "./modelCreatorReducer/modelCreatorReducer";
import myModels from "./myModelsReducer";

const rootReducer = combineReducers({
  modelCreator,
  myModels,
  router: routerReducer
});

console.log({ modelCreator, myModels, rootReducer });

export default rootReducer;
