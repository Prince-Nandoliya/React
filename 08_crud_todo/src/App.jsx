import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import Listodos from "./components/listodos";

const App = () => {
  const initialTodos = [
    {
      id: 1,
      Task: "learn react",
      Description: "you have to learn react daily",
    },
    {
      id: 2,
      Task: "learn node.js",
      Description: "you have to learn node.js daily",
    },
  ];

  const addtodo = (input) => {
    const newTodo = {
      id: new Date().getTime(),
      Task: input.Task,
      Description: input.Description,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <AddTodo  addtodo={addtodo}/>

      <Listodos todos={todos}/>
    </>
  );
};

export default App;
