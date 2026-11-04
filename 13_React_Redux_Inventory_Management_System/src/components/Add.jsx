import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, handleEdit } from "../features/carSlice";

const Add = () => {
  const [input, setInput] = useState({
    CarName: "",
    CarBrand: "",
    CarPrice: "",
    CarModal: "",
    CarColor: "",
    FuelType: "",
  });

  const { editval } = useSelector((state) => state.invontory);

  const dispatch = useDispatch();

  useEffect(() => {
    editval ? setInput(editval) : null;
  }, [editval]);

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

    if (
      !input.CarName ||
      !input.CarBrand ||
      !input.CarPrice ||
      !input.CarModal ||
      !input.CarColor ||
      !input.FuelType
    ) {
      return alert("all data are required");
    }

    if (editval) {
      dispatch(handleEdit(input));

      setInput({
        CarName: "",
        CarBrand: "",
        CarPrice: "",
        CarModal: "",
        CarColor: "",
        FuelType: "",
      });
    } else {
      dispatch(add(input));

      setInput({
        CarName: "",
        CarBrand: "",
        CarPrice: "",
        CarModal: "",
        CarColor: "",
        FuelType: "",
      });
    }
  };

  return (
    <>
      <div className="card w-50 text-center mx-auto m-3 p-3 ">
        <form onSubmit={handlesubmit}>
          <div className="row gap-2 justify-content-center">
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
          <button onClick={handlesubmit} className="w-50 mt-3 rounded-3">
            {editval ? "update" : "add"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
