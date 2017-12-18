import { myModels } from "Model/store/initialState";

export default (state = myModels, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
