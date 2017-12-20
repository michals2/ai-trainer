import { fileUploader } from "Model/store/initialState";
import { ADD_FILE } from "Model/actions/actionTypes";

export default (state = fileUploader, action) => {
  switch (action.type) {
    case ADD_FILE:
      return { ...state, files: [...state.files, action.file] };

    default:
      return state;
  }
};
