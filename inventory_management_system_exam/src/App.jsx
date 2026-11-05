import React from "react";
import List from "./components/List";
import Add from "./components/Add";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Dashboard />
      <Add />
      <List />
    </>
  );
};

export default App;
