import React from "react";
import { useTypedSelector } from "./index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const cash = useTypedSelector((state) => state.cash.cash);
  console.log(cash);

  const addCash = (value: number) => {
    dispatch({ type: "ADD_CASH", payload: value });
  };

  const getCash = (value: number) => {
    dispatch({ type: "GET_CASH", payload: value });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(Number(prompt()))}>add</button>
      <button onClick={() => getCash(Number(prompt()))}>get</button>
    </div>
  );
}

export default App;
