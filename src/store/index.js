import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import cashReducer from "./cash";
import customReducer from "./custom";

export const rootReducers = combineReducers({
  cash: cashReducer,
  custom: customReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export default store;
