import React, { useReducer, useState } from "react";

const initialvalue = {
  Counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        Counter: state.Counter + 1,
      };
    }
    case "decrement": {
      return {
        ...state,
        Counter: state.Counter - 1,
      };
    }
    case "custom": {
      const number = action.payload;
      return {
        ...state,
        Counter: state.Counter + Number(number),
      };
    }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  const [number, setnumber] = useState(0);

  return (
    <>
      <h1>Counter value = {state.Counter}</h1>

      <input
        type="number"
        placeholder="Enter Number"
        value={number}
        onChange={(e) => setnumber(e.target.value)}
      />

      <button onClick={() => dispatch({ type: "increment" })}>
        increment + 1
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        decrement -1
      </button>
      <button
        onClick={() => dispatch({ type: "custom", payload: number })}
      >{number} add</button>
    </>
  );
};

export default Counter;
