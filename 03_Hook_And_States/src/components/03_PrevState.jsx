import { useState } from "react";

const PrevState = () => {
  const [count, setCount] = useState(0);

  const handledecrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>count value :{count}</h1>

      <button
        onClick={() => {
          handledecrement();
          handledecrement();
          handledecrement();
          handledecrement();
          handledecrement();
        }}
      >
        increment +5
      </button>
      <br />
      <br />

      <button onClick={handledecrement}>increment +1</button>
    </>
  );
};

export default PrevState;
