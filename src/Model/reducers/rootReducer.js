import { combineReducers } from "redux";
import modelCreator from "./modelCreatorReducer";
import myModels from "./myModelsReducer";

const rootReducer = combineReducers({
  modelCreator,
  myModels
});

export default rootReducer;
