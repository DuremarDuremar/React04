import React from "react";
import ReactDOM from "react-dom";
import store, { rootReducers } from "./store/index";
import { Provider, TypedUseSelectorHook, useSelector } from "react-redux";
import App from "./App";

type RootState = ReturnType<typeof rootReducers>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
