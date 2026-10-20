import React, { useContext } from "react";
import { expenseContext } from "../context/ExpenseContext";

const ExpenseStats = () => {
  const { Debit, Credit, Balance } = useContext(expenseContext);

  return (
    <>
      <div className="d-flex gap-4">
        <h2>Credit : {Credit}</h2>
        <h2>Debit:{Debit}</h2>
        <h2>Balance:{Balance}</h2>
      </div>
    </>
  );
};

export default ExpenseStats;
