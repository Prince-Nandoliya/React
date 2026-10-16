import React, { createContext, useState } from "react";

export const expenseContext = createContext({
  expenseList: [],
});

const ExpenseContext = ({ children }) => {
  const initialvalues = [
    {
      id: 1,
      Title: "Food",
      Description: "Lunch",
      Amount: 1000,
      Date: "2026-10-14",
      Category: "food",
      Type: "debit",
    },
    {
      id: 2,
      Title: "Sports",
      Description: "Equipment",
      Amount: 5000,
      Date: "2026-10-14",
      Category: "sports",
      Type: "debit",
    },
  ];

  const [expenseList, setExpensList] = useState(initialvalues);

  const handleAdd = (input) => {
    const newExpense = {
      ...input,
      id: Date.now(),
    };
    setExpensList((prev) => [...prev, newExpense]);
  };

  const handleDelete = (id) => {
    setExpensList((prev) => prev.filter((expense) => expense.id !== id));
  };

  const value = {
    handleAdd,
    expenseList,
    handleAdd,
    handleDelete,
  };

  return (
    <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
  );
};

export default ExpenseContext;
