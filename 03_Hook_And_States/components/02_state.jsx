import { useState } from "react";

const State_02 = () => {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  const handlechange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>State_02</h1>
      <h1>{count}</h1>
      {/* <input type="text" value={input} onChange={handlechange} /> */}
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      {/* <input type="text" value={input} onChange={(e) => handlechange(e)} /> */}
      <br />
      <br />
      you have type <h1>{input}</h1>
    </>
  );
};

export default State_02;
