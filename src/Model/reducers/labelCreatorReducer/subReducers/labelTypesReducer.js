import { labelTypes } from "Model/store/initialState";
import {
  ADD_LABEL_TYPE,
  DELETE_LABEL_TYPE,
  SET_ACTIVE_LABEL_ID
} from "Model/actions/actionTypes";

export default (state = labelTypes, action) => {
  switch (action.type) {
    case SET_ACTIVE_LABEL_ID:
      return { ...state, activeLabelType: action.labelType };

    case ADD_LABEL_TYPE:
      console.log("adding");
      break;

    case DELETE_LABEL_TYPE:
      console.log("deleting");
      break;

    default:
      return state;
  }
};
