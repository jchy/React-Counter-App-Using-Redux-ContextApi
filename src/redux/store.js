import { createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
  count: 1
};

export const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log(`count value is changed to : `, store.getState());
});
