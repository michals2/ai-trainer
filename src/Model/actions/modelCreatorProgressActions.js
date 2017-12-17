import * as types from "./actionTypes";

export function incrementStep() {
  return { type: types.INCREMENT_STEP };
}
export function decrementStep() {
  return { type: types.DECREMENT_STEP };
}
