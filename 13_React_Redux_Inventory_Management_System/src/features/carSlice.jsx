import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {
      CarName: "Bmw m4",
      CarBrand: "Bmw",
      CarPrice: "1.5 Crore",
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
  },
});

export const { add } = carSlice.actions;

export default carSlice.reducer;
