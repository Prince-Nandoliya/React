import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, handleEdit } from "../features/InventorySlice.js";

const Add = () => {
  const [input, setInput] = useState({
    name: "",
    qty: "",
    price: "",
    category: "",
  });

  const { editval } = useSelector((state) => state.inventory);

  const dispatch = useDispatch();

  useEffect(() => {
    if (editval) {
      setInput(editval);
    }
  }, [editval]);

  const handleChange = (field, e) => {
    setInput((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.name || !input.qty || !input.price || !input.category) {
      return alert("All data required");
    }

    if (editval) {
      dispatch(handleEdit(input));
    } else {
      dispatch(add(input));
    }

    setInput({
      name: "",
      qty: "",
      price: "",
      category: "",
    });
  };

  return (
    <>
      <h1>Inventory Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={input.name}
          onChange={(e) => handleChange("name", e)}
        />

        <br />
        <br />

        <label>Qty</label>
        <input
          type="number"
          value={input.qty}
          onChange={(e) => handleChange("qty", e)}
        />

        <br />
        <br />

        <label>Price</label>
        <input
          type="number"
          value={input.price}
          onChange={(e) => handleChange("price", e)}
        />

        <br />
        <br />

        <label>Category</label>
        <input
          type="text"
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        />

        <br />
        <br />

        <button type="submit">{editval ? "Update" : "Add"}</button>
      </form>
    </>
  );
};

export default Add;
