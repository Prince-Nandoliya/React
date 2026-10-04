import React from "react";
import "./table.css";

const Listodos = ({ todos, handleDelete, handleEdit, handleCheck }) => {
  return (
    <>
      <table className="table table-bordered table-striped w-75 mx-auto rounded-5 overflow-hidden">
        <thead>
          <tr>
            <th>Id</th>
            <th>status</th>
            <th>Task</th>
            <th>Descriptiom</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((t, index) => {
            return (
              <tr key={t.id}>
                <td>{index + 1}</td>
                <td>
                  <input type="checkbox" checked={t.completed} onChange={() => handleCheck(t.id)} />
                </td>
                <td>{t.Task}</td>
                <td>{t.Description}</td>
                <td>
                  <button
                    className="w-75 rounded-3 "
                    onClick={() => handleEdit(t.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="w-75 rounded-3"
                    onClick={() => handleDelete(t.id)}
                  >
                    Delet
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Listodos;
