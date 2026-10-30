import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/CounterSlice";

const store = configureStore({
  reducer: {
    test: CounterSlice.reducer,
  },
});

export default store;
