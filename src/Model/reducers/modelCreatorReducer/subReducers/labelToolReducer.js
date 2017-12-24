import { labelTool } from "Model/store/initialState";
import {
  ADD_LABEL,
  MODIFY_LABEL,
  DELETE_LABEL,
  SET_ACTIVE_LABEL_ID
} from "Model/actions/actionTypes";

export default (state = labelTool, action) => {
  switch (action.type) {
    case ADD_LABEL:
      // deconstruction
      const currLabels = state.labels;
      const { nextLabelId, activeLabelTypeId, activeLabelType } = state;
      const { dims } = action;

      // new label
      const newLabel = {
        dims,
        labelTypeId: activeLabelTypeId,
        id: nextLabelId,
        labelType: activeLabelType
      };

      // new state
      return {
        ...state,
        labels: [...currLabels, newLabel],
        nextLabelId: nextLabelId + 1
      };
    case MODIFY_LABEL:
      console.log({ action });
      break;
    case DELETE_LABEL:
      console.log({ action });
      break;
    case SET_ACTIVE_LABEL_ID:
      return { ...state, activeLabelType: action.labelType };

    default:
      return state;
  }
};
