import React, { useContext, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const List = () => {
  const { expenseList, handleDelete, handleEdit } = useContext(expenseContext);

  const [expenseQuery, setExpenseQuery] = useState({
    Title: "",
    Category: "all",
    Type: "all",
  });

  const handleChange = (field, e) => {
    setExpenseQuery((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };
  const handleReset = () => {
    setExpenseQuery({
      Title: "",
      Type: "all",
      Category: "all",
    });
  };

  const filterList = expenseList
    .filter((l) =>
      l.Title.toLowerCase().includes(expenseQuery.Title.toLocaleLowerCase()),
    )
    .filter((l) =>
      expenseQuery.Type === "all" ? true : l.Type === expenseQuery.Type,
    )
    .filter((l) =>
      expenseQuery.Category === "all"
        ? true
        : l.Category === expenseQuery.Category,
    );
  return (
    <>
      <div className="card w-75  mx-auto p-3 ">
        <form className="mx-auto d-flex  gap-4">
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={expenseQuery.Title}
              onChange={(e) => handleChange("Title", e)}
            />
          </div>

          <div>
            <label>Type</label>
            <select
              value={expenseQuery.Type}
              onChange={(e) => handleChange("Type", e)}
            >
              <option value="all">Select Type</option>
              <option value="Credit">Credit</option>
              <option value="Debit">Debit</option>
            </select>
          </div>

          <div>
            <label>Category</label>
            <select
              value={expenseQuery.Category}
              onChange={(e) => handleChange("Category", e)}
            >
              <option value="all">Select category</option>
              <option value="Money Transfer">Money Transfer</option>
              <option value="Cash Withdrawal">Cash Withdrawal</option>
              <option value="General Expense">General Expense</option>
              <option value="Food">Food</option>
              <option value="HealthCare">HealthCare</option>
              <option value="Shopping">Shopping</option>
              <option value="Travel">Travel</option>
            </select>
          </div>
          <button onClick={handleReset} className=" btn btn-dark rounded-3">
            Reset
          </button>
        </form>
      </div>
      <br />
      <br />
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th colSpan={2} className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filterList.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
              <td>{expense.Title}</td>
              <td>{expense.Description}</td>
              <td>{expense.Category}</td>
              <td>{expense.Amount}</td>
              <td>{expense.Date}</td>
              <td>{expense.Type}</td>
              <td className="text-center">
                <button
                  className="btn btn-dark rounded-4"
                  onClick={() => handleEdit(expense.id)}
                >
                  Edit
                </button>
              </td>
              <td className="text-center">
                <button
                  className="btn btn-dark rounded-4"
                  onClick={() => handleDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
