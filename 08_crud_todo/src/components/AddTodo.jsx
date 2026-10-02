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
      <div className="card w-75 mx-auto mt-3 d-flex">
        <h1
          className="h1 text-center"
        >
          Add new Taks
        </h1>
        <form
          onSubmit={handlesubmit}
          className="mx-auto w-50 mt-3 text-center  gap-3"
        >
          <input
            type="text"
            placeholder="Enter Task"
            value={input.Task}
            onChange={(e) => handleChnge("Task", e)}
            className="w-50 rounded-2"
          />
          <br />
          <br />

          <input
            type="text"
            placeholder="Enter Description"
            value={input.Description}
            onChange={(e) => handleChnge("Description", e)}
            className=" w-50 rounded-2"
          />
          <br />
          <br />

          <button className="w-25 rounded-3 fs-5 bg-primary text-white" type="submit">
            {editval ? "Update" : "Add"}{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTodo;
