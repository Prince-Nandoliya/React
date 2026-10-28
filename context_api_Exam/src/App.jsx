import React, { useContext } from "react";
import { expenseContext } from "./context/ExpenseContext";
import List from "./components/List";
import Add from "./components/Add";

const App = () => {
  const { expenseList, setExpenseList } = useContext(expenseContext);

  const handleAdd = (input) => {
    AddExpense(input);
  };

  return (
    <>
      <Add handleAdd={handleAdd} />
      <List expenseList={expenseList}/>
      
    </>
  );
};

export default App;
