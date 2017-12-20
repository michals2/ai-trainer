import { combineReducers } from "redux";

import modelCreatorProgress from "./modelCreatorProgressReducer";
import labelTool from "./labelToolReducer";
import fileUploader from "./fileUploaderReducer";

const modelCreatorReducer = combineReducers({
  modelCreatorProgress,
  fileUploader,
  labelTool
});

export default modelCreatorReducer;
