import React, { useContext } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ListExpense = () => {
  const { expenseList, handleDelete } = useContext(expenseContext);

  return (
    <>
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
          {expenseList.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
              <td>{expense.Title}</td>
              <td>{expense.Description}</td>
              <td>{expense.Category}</td>
              <td>{expense.Amount}</td>
              <td>{expense.Date}</td>
              <td>{expense.Type}</td>
              <td className="text-center">
                <button className="btn btn-dark rounded-4">Edit</button>
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
