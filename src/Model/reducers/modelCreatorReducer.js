import initialState from "./../store/initialState";
import { INCREMENT_STEP, DECREMENT_STEP } from "../actions/actionTypes";

const { Map } = require("immutable");

export default (state = initialState, action) => {
  let imState = Map(state);

  switch (action.type) {
    case INCREMENT_STEP:
      return imState.modelCreator.set(state.modelCreator.step + 1).toObject;

    case DECREMENT_STEP:
      return imState.modelCreator.set(state.modelCreator.step - 1).toObject;

    default:
      return state;
  }
};
