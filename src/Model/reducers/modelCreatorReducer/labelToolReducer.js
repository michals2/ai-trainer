import { labelTool } from "Model/store/initialState";
import { ADD_LABEL, DELETE_LABEL } from "Model/actions/actionTypes";

export default (state = labelTool, action) => {
  switch (action.type) {
    case ADD_LABEL:
      console.log("add label");
    case DELETE_LABEL:
      console.log("delete label");

    default:
      return state;
  }
};
