import React, { useEffect, useState } from "react";

const AddTodo = ({addtodo,editval}) => {
  const [input, setInput] = useState({
    Task: "",
    Description: "",
  });

  useEffect(() => {
    editval ? setInput(editval) : null
  },[editval])

  const handleChnge = (feild, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [feild]: e.target.value,
      };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    addtodo(input); 

    setInput({ Task: "", Description: "" });
  };

  return (
    <>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={input.Task}
          onChange={(e) => handleChnge("Task", e)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Description"
          value={input.Description}
          onChange={(e) => handleChnge("Description", e)}
        />
        <br />
        <br />
        <button type="submit">{editval ? "update" : "add"}</button>
      </form>
    </>
  );
};

export default AddTodo;
