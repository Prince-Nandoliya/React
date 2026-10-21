import React, { createContext, useState } from "react";

export const expenseContext = createContext({
  expenseList: [],
  handleAdd: () => {},
  handleDelete: () => {},
  editVal: null,
  handleEdit: () => {},
  setEditval: () => {},
  Debit: 0,
  Credit: 0,
  Balance: 0,
});
const initialvalues = [
  {
    id: 1,
    Title: "Food",
    Description: "Lunch",
    Amount: 1000,
    Date: "2026-10-14",
    Category: "Food",
    Type: "Debit",
  },
  {
    id: 2,
    Title: "Sports",
    Description: "Equipment",
    Amount: 5000,
    Date: "2026-10-14",
    Category: "Travel",
    Type: "Debit",
  },
];

const ExpenseContext = ({ children }) => {
  const [expenseList, setExpensList] = useState(initialvalues);
  const [editVal, setEditval] = useState(null);

  const handleAdd = (input) => {
    if (!input) {
      return console.log("add input data");
    }

    if (editVal) {
      setExpensList((prev) =>
        prev.map((expense) =>
          expense.id === editVal.id
            ? {
                ...input,
                id: editVal.id,
                Amount: Number(input.Amount),
              }
            : expense,
        ),
      );
      setEditval(null);
    } else {
      const newExpense = {
        ...input,
        id: Date.now(),
        Amount: Number(input.Amount),
      };

      setExpensList((prev) => [...prev, newExpense]);
    }
  };

  const handleEdit = (id) => {
    const expense = expenseList.find((item) => item.id === id);

    setEditval(expense || null);
  };

  const handleDelete = (id) => {
    setExpensList((prev) => prev.filter((expense) => expense.id !== id));
  };

  const Debit = expenseList
    .filter((p) => p.Type === "Credit")
    .reduce((acc, curr) => acc + Number(curr.Amount), 0);

  const Credit = expenseList
    .filter((p) => p.Type === "Debit")
    .reduce((acc, curr) => acc + Number(curr.Amount), 0);

  const Balance = Credit - Debit;

  const value = {
    handleAdd,
    expenseList,
    handleDelete,
    handleEdit,
    editVal,
    Debit,
    Credit,
    Balance,
  };

  return (
    <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
  );
};

export default ExpenseContext;
