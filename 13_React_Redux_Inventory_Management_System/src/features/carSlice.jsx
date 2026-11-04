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
    {
      id: 2,
      CarName: "Fortuner",
      CarBrand: "Toyota",
      CarPrice: "5000000",
      CarModal: "2024",
      CarColor: "White",
      FuelType: "Diesel",
    },
    {
      id: 3,
      CarName: "Thar",
      CarBrand: "Mahindra",
      CarPrice: "1800000",
      CarModal: "2025",
      CarColor: "Red",
      FuelType: "Diesel",
    },
    {
      id: 4,
      CarName: "Creta",
      CarBrand: "Hyundai",
      CarPrice: "1500000",
      CarModal: "2024",
      CarColor: "Silver",
      FuelType: "Petrol",
    },
    {
      id: 5,
      CarName: "Swift",
      CarBrand: "Maruti Suzuki",
      CarPrice: "800000",
      CarModal: "2023",
      CarColor: "Blue",
      FuelType: "Petrol",
    },
    {
      id: 6,
      CarName: "Nexon",
      CarBrand: "Tata",
      CarPrice: "1200000",
      CarModal: "2025",
      CarColor: "Grey",
      FuelType: "Electric",
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
