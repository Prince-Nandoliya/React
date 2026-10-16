import React, { useContext } from "react";
import AddExpense from "./components/AddExpense";
import { expenseContext } from "./context/ExpenseContext";
import ListExpense from "./components/ListExpense";

const App = () => {
  const { expenseList,setExpenseList } = useContext(expenseContext);
  console.log("expenselist", expenseList);

  const handleAdd = (input) => {
    AddExpense(input);
  };

  return (
    <>
      <AddExpense handleAdd={handleAdd} />
      <ListExpense expenseList={expenseList} />
    </>
  );
};

export default App;
