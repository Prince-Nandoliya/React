import { createAsyncThunk } from "@reduxjs/toolkit";

 export const fetchProduct = createAsyncThunk("product/getAllproduct", async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("fail to fetch data");
  }

  const data = await res.json();

  return data;
});
