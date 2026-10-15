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
      <div className="container w-75 text-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-lg-6">
              <input
                className="w-75"
                type="text"
                placeholder="Enter Title"
                value={input.Title}
                onChange={(e) => handleChange(e, "Title")}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="w-75"
                type="text"
                placeholder="Enter Description"
                value={input.Description}
                onChange={(e) => handleChange(e, "Description")}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="w-75"
                type="text"
                placeholder="Enter Category"
                value={input.Category}
                onChange={(e) => handleChange(e, "Category")}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="w-75"
                type="Number"
                placeholder="Enter Amount"
                value={input.Amount}
                onChange={(e) => handleChange(e, "Amount")}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="w-75"
                type="Date"
                value={input.Date}
                onChange={(e) => handleChange(e, "Date")}
              />
            </div>
            <div className="col-lg-6">
              <input
                className="w-75"
                type="text"
                placeholder="Enter Type"
                value={input.Type}
                onChange={(e) => handleChange(e, "Type")}
              />
            </div>

            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddExpense;
