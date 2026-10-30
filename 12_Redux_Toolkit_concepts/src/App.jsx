import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  customIncrement,
  customDecrement,
  Reset
} from "./features/CounterSlice";
const App = () => {
  const { test } = useSelector((state) => state.test);

  const dispatch = useDispatch();

  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{test}</h1>
      <input
        type="number"
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => dispatch(increment())}>increment</button>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch(customIncrement(number))}>
        customIncrement
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(customDecrement(number))}>
        customDecrement
      </button><br /><br />
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
};

export default App;
