import React, { useContext } from "react";
import AddExpense from "./components/AddExpense";
import { expenseContext } from "./context/ExpenseContext";
import ListExpense from "./components/ListExpense";
import ExpenseStats from "./components/ExpenseStats";
import Counter from "./concept/Counter";

const App = () => {
  const { expenseList, setExpenseList } = useContext(expenseContext);
  console.log("expenselist", expenseList);

  const handleAdd = (input) => {
    AddExpense(input);
  };

  return (
    <>
      <Counter />
      {/* <ExpenseStats />
      <AddExpense handleAdd={handleAdd} />
      <ListExpense expenseList={expenseList} /> */}
    </>
  );
};

export default App;
