import React, { useEffect, useState } from "react";

const Life_Cycle = () => {
  const [name, setName] = useState("");

  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("mount");
  //   }, [count]);

  //mounted
  //   useEffect(() => {
  //     console.log("component mounted");
  //   }, []);

  // mounted update

  //   useEffect(() => {
  //     console.log("component update");
  //   }, [count]);

  //unmount

  useEffect(() => {
    console.log("this will mount");

    return () => {
      console.log("this will unmount");
    };
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <h1>you have typed:- {name}</h1>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
};

export default Life_Cycle;
