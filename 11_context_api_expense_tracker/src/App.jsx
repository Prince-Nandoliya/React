import React, { useContext } from "react";
import AddExpense from "./components/AddExpense";
import { expenseContext } from "./context/ExpenseContext";
import ListExpense from "./components/ListExpense";
import ExpenseStats from "./components/ExpenseStats";

const App = () => {
  const { expenseList, setExpenseList } = useContext(expenseContext);
  console.log("expenselist", expenseList);

  const handleAdd = (input) => {
    AddExpense(input);
  };

  return (
    <>
      <ExpenseStats />
      <AddExpense handleAdd={handleAdd} />
      <ListExpense expenseList={expenseList} />
    </>
  );
};

export default App;
