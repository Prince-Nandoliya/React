import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "test",
  initialState: { test: 1 },
  reducers: {
    increment: (state) => {
      state.test += 1;
    },
    decrement: (state) => {
      state.test -= 1;
    },
    customIncrement: (state, action) => {
      state.test += +action.payload;
    },
    customDecrement: (state, action) => {
      state.test -= +action.payload;
    },
    Reset: (state) => {
      state.test = 0;
    },
  },
});

export const { increment, decrement, customIncrement, customDecrement, Reset } =
  CounterSlice.actions;

export default CounterSlice;
