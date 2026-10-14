import React, { useContext, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const AddExpense = () => {
  const [input, setInput] = useState({
    Title: "",
    Description: "",
    Category: "",
    Amount: "",
    Date: "",
    Type: "",
  });

  const { setExpensList } = useContext(expenseContext);

  const handleChange = (e, field) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setExpensList((prev) => [
      ...prev,
      {
        ...input,
        id: Date.now(),
        Amount: Number(input.Amount),
      },
    ]);

    setInput({
      Title: "",
      Description: "",
      Category: "",
      Amount: "",
      Date: "",
      Type: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit}>
              <br />
              <input
                type="text"
                placeholder="Enter Title"
                value={input.Title}
                onChange={(e) => handleChange(e, "Title")}
              />
              <br />

              <input
                type="text"
                placeholder="Enter Description"
                value={input.Description}
                onChange={(e) => handleChange(e, "Description")}
              />
              <br />

              <input
                type="text"
                placeholder="Enter Category"
                value={input.Category}
                onChange={(e) => handleChange(e, "Category")}
              />
              <br />

              <input
                type="Number"
                placeholder="Enter Amount"
                value={input.Amount}
                onChange={(e) => handleChange(e, "Amount")}
              />
              <br />

              <input
                type="Date"
                value={input.Date}
                onChange={(e) => handleChange(e, "Date")}
              />
              <br />

              <input
                type="text"
                placeholder="Enter Type"
                value={input.Type}
                onChange={(e) => handleChange(e, "Type")}
              />

              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
