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

  const [todos, setTodos] = useState(initialTodos);

  const [editval, setEditval] = useState(null);

  const handleadd = (input) => {
    if (!input.Task || !input.Description) {
      alert("Task data are required");
      return;
    } else if (editval) {
      setTodos((todos) =>
        todos.map((t) =>
          t.id === editval.id
            ? { Task: input.Task, Description: input.Description }
            : t,
        ),
      );
      setEditval(null)
    }else {
      const newtodo = {
        id:new Date().getTime(),
        Task: input.Task,
        Description: input.Description,
      }
      setTodos((prev)=> [...prev,newtodo])
      alert("Task add successfully")
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t)=> t.id !== id))
  }

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id)

    setEditval(todo)
  }

  return(
    <>
    <AddTodo addtodo={handleadd} editval={editval}/>
    <br /><br />
    <Listodos todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </>
  )

};

export default App;
