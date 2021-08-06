import { combineReducers } from "redux";

import { frameReducer } from "./reducers/frameR";

export const rootReducer = combineReducers({
  frame: frameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
