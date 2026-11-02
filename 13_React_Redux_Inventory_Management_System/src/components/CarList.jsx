import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditValue } from "../features/carSlice";

const CarList = () => {
  const newcarlist = useSelector((state) => state.invontory.cars);

  const dispatch = useDispatch();

  return (
    <div className="card w-75 mx-auto p-3 m-3">
      <table className="table table-bordered ">
      <thead>
        <tr>
          <th>CarName</th>
          <th>CarBrand</th>
          <th>CarPrice</th>
          <th>CarModal</th>
          <th>CarColor</th>
          <th>FuelType</th>
          <th colSpan={2} className="text-center">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        {newcarlist.map((i, index) => {
          return (
            <tr key={i.id}>
              <td>{i.CarName}</td>
              <td>{i.CarBrand}</td>
              <td>{i.CarPrice}</td>
              <td>{i.CarModal}</td>
              <td>{i.CarColor}</td>
              <td>{i.FuelType}</td>
              <td
                className="text-center"
                onClick={() => dispatch(setEditValue(i.id))}
              >
                <button>Edit</button>
              </td>
              <td className="text-center">
                <button>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};

export default CarList;
