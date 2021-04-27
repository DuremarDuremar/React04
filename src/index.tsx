import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider, TypedUseSelectorHook, useSelector } from "react-redux";
import App from "./App";

const defaultState = {
  cash: 0,
  hh: 22,
};

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "ADD_CASH": {
      return { ...state, cash: state.cash + action.payload };
    }
    case "GET_CASH": {
      return { ...state, cash: state.cash - action.payload };
    }
    default:
      return state;
  }
};

type RootState = ReturnType<typeof reducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
