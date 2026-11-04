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

    handleEdit: (state, action) => {
      const Index = state.cars.findIndex((c) => c.id === state.editval.id);
      console.log("car index", Index);

      if (Index !== -1) {
        state.cars[Index] = action.payload;
      }

      state.editval = null;
    },

    handleDelete: (state, action) => {
      state.cars = state.cars.filter((i) => i.id !== action.payload);
    },
  },
});

export const { add, setEditValue, handleEdit, handleDelete } = carSlice.actions;

export default carSlice.reducer;
