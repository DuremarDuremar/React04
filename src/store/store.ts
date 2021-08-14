import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
// import { frameReducer } from "./reducers/frameR";
import frameReducer from "./slices";

const rootReducer = combineReducers({
  frame: frameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore(
  {
    reducer: {
      frame: frameReducer,
    },
  }

  // rootReducer,
  // composeWithDevTools(applyMiddleware(thunk))
);
