import React, { useEffect, useState } from "react";

const AddTodo = ({ addtodo, editval }) => {
  const [input, setInput] = useState({
    Task: "",
    Description: "",
  });

  useEffect(() => {
    editval ? setInput(editval) : null;
  }, [editval]);

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
     
        <form onSubmit={handlesubmit} className="mx-auto w-50 mt-3 text-center">
          <input
            type="text"
            placeholder="Enter Task"
            value={input.Task}
            onChange={(e) => handleChnge("Task", e)}
            className=" w-100 rounded-3"
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Enter Description"
            value={input.Description}
            onChange={(e) => handleChnge("Description", e)}
            className=" w-100 rounded-3"
          />
          <br />
          <br />

          <button className="w-25 rounded-3 fs-5"  type="submit">{editval ? "update" : "add"} </button>
        </form>
    </>
  );
};

export default AddTodo;
