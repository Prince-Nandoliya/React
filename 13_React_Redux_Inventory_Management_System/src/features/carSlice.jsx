import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      id: 1,
      CarName: "Bmw m4",
      CarBrand: "Bmw",
      CarPrice: "10000000",
      CarModal: "2025",
      CarColor: "Black",
      FuelType: "petrol",
    },
  ],
};

const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    add: (state, action) => {
      const newCar = {
        id: new Date().getTime(),
        ...action.payload,
      };
      state.cars.push(newCar);
    },

    setEditValue: (state, action) => {
      state.editval = state.cars.find((c) => c.id === action.payload);
    },
  },
});

export const { add, setEditValue } = carSlice.actions;

export default carSlice.reducer;
