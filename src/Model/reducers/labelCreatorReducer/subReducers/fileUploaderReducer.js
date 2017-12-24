import { fileUploader } from "Model/store/initialState";
import { ADD_FILE } from "Model/actions/actionTypes";

export default (state = fileUploader, action) => {
  switch (action.type) {
    case ADD_FILE:
      const fileObj = {
        fileName: action.fileName,
        url: action.url,
        dims: action.dims
      };
      return { ...state, files: [...state.files, fileObj] };

    default:
      return state;
  }
};
