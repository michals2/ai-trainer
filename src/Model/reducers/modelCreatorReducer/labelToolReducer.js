import { labelTool } from "Model/store/initialState";
import {
  ADD_LABEL,
  DELETE_LABEL,
  SET_LABEL_TYPE
} from "Model/actions/actionTypes";

export default (state = labelTool, action) => {
  switch (action.type) {
    case ADD_LABEL:
      console.log({ action });
      break;
    case DELETE_LABEL:
      console.log({ action });
      break;
    case SET_LABEL_TYPE:
      return { ...state, activeLabelType: action.labelType };

    default:
      return state;
  }
};
