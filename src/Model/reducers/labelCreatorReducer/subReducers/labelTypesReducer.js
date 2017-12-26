import { labelTypes } from "Model/store/initialState";
import {
  ADD_LABEL_TYPE,
  DELETE_LABEL_TYPE,
  SET_ACTIVE_LABEL_TYPE_ID
} from "Model/actions/actionTypes";

export default (state = labelTypes, action) => {
  switch (action.type) {
    case SET_ACTIVE_LABEL_TYPE_ID:
      console.log({ action });
      return { ...state, activeLabelTypeId: action.id };

    case ADD_LABEL_TYPE:
      const { name, shape, color } = action;
      const { nextAvailableLabelTypeId } = state;
      console.log({ nextAvailableLabelTypeId });
      const newLabelType = {
        id: nextAvailableLabelTypeId,
        name,
        shape,
        color
      };
      return {
        ...state,
        labelTypes: [...state.labelTypes, newLabelType],
        nextAvailableLabelTypeId: nextAvailableLabelTypeId + 1
      };

    case DELETE_LABEL_TYPE:
      console.log("deleting");
      break;

    default:
      return state;
  }
};
