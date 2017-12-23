import { combineReducers } from "redux";

import modelCreatorProgress from "./subReducers/modelCreatorProgressReducer";
import labelTool from "./subReducers/labelToolReducer";
import fileUploader from "./subReducers/fileUploaderReducer";

const modelCreatorReducer = combineReducers({
  modelCreatorProgress,
  fileUploader,
  labelTool
});

export default modelCreatorReducer;
