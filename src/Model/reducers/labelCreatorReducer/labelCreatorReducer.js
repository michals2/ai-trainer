import { combineReducers } from "redux";

import labelCreatorProgress from "./subReducers/labelCreatorProgressReducer";
import labelTool from "./subReducers/labelToolReducer";
import fileUploader from "./subReducers/fileUploaderReducer";

const modelCreatorReducer = combineReducers({
  labelCreatorProgress,
  fileUploader,
  labelTool
});

export default modelCreatorReducer;
