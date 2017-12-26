import { labels } from "Model/store/initialState";
import {
  ADD_LABEL,
  MODIFY_LABEL,
  DELETE_LABEL,
  SET_ACTIVE_LABEL_ID
} from "Model/actions/actionTypes";

export default (state = labels, action) => {
  // deconstruction
  const currLabels = state.labels;
  const { nextAvailabelLabelId, activeLabelId } = state;
  const { dims, activeLabelTypeId } = action;
  const activeLabel = currLabels.find(label => label.id === activeLabelId);

  // const activeLabelIdex = currLabels.

  let newLabel;

  switch (action.type) {
    case ADD_LABEL:
      // new label
      newLabel = {
        dims,
        labelTypeId: activeLabelTypeId,
        id: nextAvailabelLabelId
      };

      // new state
      return {
        ...state,
        labels: [...currLabels, newLabel],
        activeLabelId: nextAvailabelLabelId,
        nextAvailabelLabelId: nextAvailabelLabelId + 1
      };

    case MODIFY_LABEL:
      newLabel = {
        ...activeLabel,
        dims: { ...activeLabel.dims, ...dims }
      };
      return {
        ...state
      };

    case DELETE_LABEL:
      console.log({ action });
      break;

    case SET_ACTIVE_LABEL_ID:
      return { ...state, activeLabelType: action.id };

    default:
      return state;
  }
};
