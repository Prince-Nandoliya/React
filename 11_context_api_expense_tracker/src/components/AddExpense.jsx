import React, { useContext, useEffect, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const initialForm = {
  Title: "",
  Description: "",
  Category: "",
  Amount: "",
  Date: "",
  Type: "",
};
const AddExpense = () => {
  const { handleAdd, editVal } = useContext(expenseContext);
  const [input, setInput] = useState(initialForm);

  useEffect(() => {
    editVal ? setInput(editVal) : null;
  }, [editVal]);

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

    handleAdd({
      ...input,
      Amount: Number(input.Amount),
    });
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
      <div className="card w-75 text-center mt-5 mx-auto p-3">
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
              <select
                name=""
                id=""
                className="w-75"
                value={input.Category}
                onChange={(e) => handleChange(e, "Category")}
              >
                <option value="">Select category</option>
                <option value="Money Transfer">Money Transfer</option>
                <option value="Cash Withdrawal">Cash Withdrawal</option>
                <option value="General Expense">General Expense</option>
                <option value="Food&Dining">Food</option>
                <option value="HealthCare">HealthCare</option>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
              </select>
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

            <button
              type="submit"
              className="btn btn-dark rounded-3 w-50 mx-auto"
            >{editVal ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
    </>
  );
};

export default AddExpense;
