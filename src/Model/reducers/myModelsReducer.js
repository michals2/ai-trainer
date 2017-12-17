import { myModelsInitialState } from "Model/store/initialState";

export default (state = myModelsInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
