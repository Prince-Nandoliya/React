import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/carSlice";

const Add = () => {
  const [input, setInput] = useState({
    CarName: "",
    CarBrand: "",
    CarPrice: "",
    CarModal: "",
    CarColor: "",
    FuelType: "",
  });

  const dispatch = useDispatch();

  const handlechange = (feild, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [feild]: e.target.value,
      };
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    dispatch(add(input));

    setInput({
      CarName: "",
      CarBrand: "",
      CarPrice: "",
      CarModal: "",
      CarColor: "",
      FuelType: "",
    });
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handlesubmit}>
          <div className="row">
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter Car Name"
                value={input.CarName}
                onChange={(e) => handlechange("CarName", e)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter CarBrand"
                value={input.CarBrand}
                onChange={(e) => handlechange("CarBrand", e)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="number"
                placeholder="Enter CarPrice"
                value={input.CarPrice}
                onChange={(e) => handlechange("CarPrice", e)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter CarModal"
                value={input.CarModal}
                onChange={(e) => handlechange("CarModal", e)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter CarColor"
                value={input.CarColor}
                onChange={(e) => handlechange("CarColor", e)}
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                placeholder="Enter FuelType"
                value={input.FuelType}
                onChange={(e) => handlechange("FuelType", e)}
              />
            </div>
          </div>
          <button onClick={handlesubmit}>Add</button>
        </form>
      </div>
    </>
  );
};

export default Add;
