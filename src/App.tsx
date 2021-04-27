import React from "react";
import { useTypedSelector } from "./index";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const cash = useTypedSelector((state) => state.cash);
  console.log(cash);

  const addCash = () => {
    dispatch({ type: "ADD_CASH", payload: 1 });
  };

  const getCash = () => {
    dispatch({ type: "GET_CASH", payload: 1 });
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash()}>add</button>
      <button onClick={() => getCash()}>get</button>
    </div>
  );
}

export default App;
