import * as types from "./actionTypes";

export function incrementStep() {
  return { type: types.INCREMENT_STEP };
}
export function decrementStep() {
  return { type: types.DECREMENT_STEP };
}

export function addLabel(dims, activeLabelTypeId) {
  return { type: types.ADD_LABEL, dims, activeLabelTypeId };
}
export function modifyLabel(dims) {
  return { type: types.MODIFY_LABEL, dims };
}
export function deleteLabel(key) {
  return { type: types.DELETE_LABEL, key };
}
export function setActiveLabelId(labelType) {
  return { type: types.SET_ACTIVE_LABEL_ID, labelType };
}

export function addLabelType(name, shape, color) {
  return { type: types.ADD_LABEL_TYPE, name, shape, color };
}
export function deleteLabelType(id) {
  return { type: types.DELETE_LABEL_TYPE, id };
}
export function setActiveLabelTypeId(id) {
  return { type: types.SET_ACTIVE_LABEL_TYPE_ID, id };
}

export function addFile(url, fileName, dims) {
  return { type: types.ADD_FILE, url, fileName, dims };
}
