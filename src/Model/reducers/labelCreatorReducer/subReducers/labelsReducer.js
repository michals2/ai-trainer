import { labels } from "Model/store/initialState";
import {
  ADD_LABEL,
  MODIFY_NEW_LABEL,
  DELETE_LABEL,
  SET_ACTIVE_LABEL_ID
} from "Model/actions/actionTypes";
import { fromJS } from "immutable";

export default (state = labels, action) => {
  const imState = fromJS(state);

  // deconstruction
  const { nextAvailabelLabelId, activeLabelId } = state;
  const { dims, activeLabelTypeId, pos } = action;

  let newLabel;
  let newState;

  switch (action.type) {
    case ADD_LABEL:
      // new label
      newLabel = {
        dims,
        labelTypeId: activeLabelTypeId,
        id: nextAvailabelLabelId
      };

      newState = imState
        .set("activeLabelId", nextAvailabelLabelId)
        .set("nextAvailabelLabelId", nextAvailabelLabelId + 1)
        .set("activelyModifyingLabel", true)
        .updateIn(["labels"], list => list.push(newLabel))
        .toJS();

      return newState;

    case MODIFY_NEW_LABEL:
      newState = imState
        .updateIn(["labels"], labels =>
          labels.map(label => {
            if (label.get("id") === activeLabelId) {
              return label.updateIn(["dims"], dims => {
                const dimX = dims.get("x");
                const dimY = dims.get("y");

                return dims
                  .set("width", Math.abs(pos.x - dimX))
                  .set("height", Math.abs(pos.y - dimY))
                // .set("x", Math.min(dims.get("x"), pos.x))
                // .set("y", Math.min(dims.get("y"), pos.y))
              });
            } else {
              return label;
            }
          })
        )
        .toJS();

      console.log({ newState });

      return newState;

    case DELETE_LABEL:
      console.log({ action });
      break;

    case SET_ACTIVE_LABEL_ID:
      return { ...state, activeLabelType: action.id };

    default:
      return state;
  }
};
