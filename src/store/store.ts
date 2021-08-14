import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import frameReducer from "./slices";

const rootReducer = combineReducers({
  frame: frameReducer,
});

export const store = configureStore({
  reducer: {
    frame: frameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
