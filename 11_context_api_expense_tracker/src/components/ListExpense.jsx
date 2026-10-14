import React from "react";

const ListExpense = ({ expenseList }) => {
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListExpense;
