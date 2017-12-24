import { combineReducers } from "redux";

import labelCreatorProgress from "./subReducers/labelCreatorProgressReducer";
import labels from "./subReducers/labelsReducer";
import fileUploader from "./subReducers/fileUploaderReducer";
import labelTypes from "./subReducers/labelTypesReducer";

const modelCreatorReducer = combineReducers({
  labelCreatorProgress,
  fileUploader,
  labels,
  labelTypes
});

export default modelCreatorReducer;
