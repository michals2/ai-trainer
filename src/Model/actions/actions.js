import * as types from "./actionTypes";

export function incrementStep() {
  return { type: types.INCREMENT_STEP };
}
export function decrementStep() {
  return { type: types.DECREMENT_STEP };
}

export function addLabel(dims) {
  return { type: types.ADD_LABEL, dims };
}
export function modifyLabel(key, dims) {
  return { type: types.MODIFY_LABEL, key, dims };
}
export function deleteLabel(key) {
  return { type: types.DELETE_LABEL, key };
}
export function setActiveLabelId(labelType) {
  return { type: types.SET_ACTIVE_LABEL_ID, labelType };
}

export function addFile(url, fileName, dims) {
  return { type: types.ADD_FILE, url, fileName, dims };
}
