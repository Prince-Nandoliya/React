import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditValue, handleDelete } from "../features/carSlice";

const CarList = () => {
  const newcarlist = useSelector((state) => state.invontory.cars);

  const dispatch = useDispatch();

  const [carQuery, setCarQuery] = useState({
    search: "",
    sort: "",
  });

  const handlechange = (field, e) => {
    setCarQuery((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const fillterList = newcarlist.filter((i) =>
    i.CarName.toLowerCase().includes(carQuery.search.toLowerCase()),
  );

  const soredtList = [...fillterList].sort((a, b) => {
    if (carQuery.sort === "asc") {
      return a.id - b.id;
    }
    if (carQuery.sort === "desc") {
      return b.id - a.id;
    }
    if (carQuery.sort === "priceAscending") {
      return a.CarPrice - b.CarPrice;
    }
    if (carQuery.sort === "priceDescending") {
      return b.CarPrice - a.CarPrice;
    }
  });

  const handleReset = () => {
    setCarQuery({
      search: "",
      sort: "asc",
    });
  };

  return (
    <>
      <div className="card w-25 mx-auto m-3 p-3">
        <input
          type="text"
          placeholder="Enter Car Name"
          value={carQuery.search}
          onChange={(e) => handlechange("search", e)}
        />
        <br />

        <select value={carQuery.sort} onChange={(e) => handlechange("sort", e)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
          <option value="priceAscending">Price Ascending</option>
          <option value="priceDescending">Price Descending</option>
        </select>
        <br />

        <button onClick={handleReset} className="rounded-2">
          Reset
        </button>
      </div>
      <br />

      <div className="card w-75 mx-auto p-3 m-3">
        <table className="table table-bordered ">
          <thead>
            <tr>
              <th>Id</th>
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
            {soredtList.map((i, index) => {
              return (
                <tr key={i.id}>
                  <td>{index + 1}</td>
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
                    <button onClick={() => dispatch(handleDelete(i.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CarList;
