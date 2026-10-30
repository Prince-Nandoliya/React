import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CarList = () => {
  const newcarlist = useSelector((state) => state.invontory.cars);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>CarName</th>
          <th>CarBrand</th>
          <th>CarPrice</th>
          <th>CarModal</th>
          <th>CarColor</th>
          <th>FuelType</th>
        </tr>
      </thead>
      <tbody>
        {newcarlist.map((i, index) => (
          <tr key={i.id}>
            <td>{i.CarName}</td>
            <td>{i.CarBrand}</td>
            <td>{i.CarPrice}</td>
            <td>{i.CarModal}</td>
            <td>{i.CarColor}</td>
            <td>{i.FuelType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarList;
