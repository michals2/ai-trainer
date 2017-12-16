import initialMyModelsState from "./../store/initialMyModelsState";
import { INCREMENT_STEP, DECREMENT_STEP } from "../actions/actionTypes";

export default (state = initialMyModelsState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
