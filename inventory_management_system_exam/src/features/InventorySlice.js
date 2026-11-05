import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Smart Watch",
      qty: 12,
      price: 4500,
      category: "Wearables",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      qty: 7,
      price: 1800,
      category: "Electronics",
    },
  ],
  editval: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,

  reducers: {
    add: (state, action) => {
      const newProduct = {
        id: new Date().getTime(),
        ...action.payload,
      };

      state.products.push(newProduct);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },

    seteditval: (state, action) => {
      state.editval = action.payload;
    },

    handleEdit: (state, action) => {
      const Index = state.products.findIndex((p) => p.id === state.editval.id);

      console.log("product index", Index);

      if (Index !== -1) {
        state.products[Index] = action.payload;
      }

      state.editval = null;
    },
  },
});

export const { add, deleteProduct, seteditval, handleEdit } =
  inventorySlice.actions;

export default inventorySlice.reducer;
