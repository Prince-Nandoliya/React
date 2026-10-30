import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../features/carSlice";

const store = configureStore({
  reducer: {
    invontory: carSlice,
  },
});

export default store;
