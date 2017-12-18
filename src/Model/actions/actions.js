import * as types from "./actionTypes";

export function incrementStep() {
  return { type: types.INCREMENT_STEP };
}
export function decrementStep() {
  return { type: types.DECREMENT_STEP };
}

export function addLabel(shape, dimensions, file) {
  return { type: types.ADD_LABEL, shape, dimensions, file };
}
export function deleteLabel(file, labelID) {
  return { type: types.DELETE_LABEL, file, labelID };
}
export function setLabelType(labelType) {
  return { type: types.SET_LABEL_TYPE, labelType };
}
