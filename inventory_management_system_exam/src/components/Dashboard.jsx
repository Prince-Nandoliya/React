import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const products = useSelector((state) => state.inventory.products);

  const TotalProduct = products.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  const highStock = products.filter((p) => p.qty > 10).length;

  const lowStock = products.filter((p) => p.qty <= 10).length

  return (
    <>
      <h1>Total Product:-{TotalProduct}</h1>

      <h1>highStock:-{highStock}</h1>

      <h1>lowStock:-{lowStock}</h1>
    </>
  );
};

export default Dashboard;
