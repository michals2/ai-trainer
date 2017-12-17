import initialModelCreatorState from "./../store/initialModelCreatorState";
import { INCREMENT_STEP, DECREMENT_STEP } from "../actions/actionTypes";
const { Map } = require("immutable");

const stepLimits = [0, 3];

export default (state = initialModelCreatorState, action) => {
  const imState = Map(state);
  const currentStep = state.step;

  switch (action.type) {
    case INCREMENT_STEP:
      if (currentStep === stepLimits[1] - 1)
        return imState
          .set("nextButtonDisabled", true)
          .set("step", currentStep + 1)
          .toObject();
      else if (currentStep > stepLimits[1]) {
        console.log("something went wrong");
        return imState
          .set("step", stepLimits[1])
          .set("prevButtonDisabled", false)
          .set("nextButtonDisabled", true)
          .toObject();
      } else
        return imState
          .set("step", currentStep + 1)
          .set("prevButtonDisabled", false)
          .set("nextButtonDisabled", false)
          .toObject();

    case DECREMENT_STEP:
      if (currentStep <= stepLimits[0] + 1)
        return imState
          .set("prevButtonDisabled", true)
          .set("step", currentStep - 1)
          .toObject();
      else if (currentStep > stepLimits[1]) {
        console.log("something went wrong");
        return imState
          .set("step", stepLimits[0])
          .set("prevButtonDisabled", true)
          .set("nextButtonDisabled", false)
          .toObject();
      } else
        return imState
          .set("step", currentStep - 1)
          .set("prevButtonDisabled", false)
          .set("nextButtonDisabled", false)
          .toObject();

    default:
      return state;
  }
};
