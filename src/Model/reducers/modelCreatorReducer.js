import initialModelCreatorState from "./../store/initialModelCreatorState";
import { INCREMENT_STEP, DECREMENT_STEP } from "../actions/actionTypes";

// const { Map } = require("immutable");

export default (state = initialModelCreatorState, action) => {
  // let imState = Map(state);

  switch (action.type) {
    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1
      };

    case DECREMENT_STEP:
      return {
        ...state,
        step: state.step - 1
      };

    default:
      return state;
  }
};
