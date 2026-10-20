import React, { useContext, useState } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ListExpense = () => {
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

  const filterList = expenseList.filter((l) =>
    l.Title.toLowerCase().includes(expenseQuery.Title.toLocaleLowerCase()),
  );

  return (
    <>
      <div className="card w-75  mx-auto p-3">
        <form>
          <label>Title</label>
          <input
            type="text"
            placeholder="Enter Title"
            value={expenseQuery.Title}
            onChange={(e) => handleChange("Title", e)}
          />
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

export default ListExpense;
