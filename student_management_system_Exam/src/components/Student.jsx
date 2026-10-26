import React, { useEffect, useState } from "react";
import { allStudent, deleteStudents } from "../Api/Student";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();
  const [Student, setStudent] = useState([]);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setError(null);
      const data = await allStudent();
      setStudent(data);
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudents(id);
      alert("student deleted successfully");
      loadData();
    } catch (error) {
      console.log("error", error);
      alert("Failed to delete student");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (error) {
    return (
      <div className="container mt-4 text-center">
        <h3 className="text-danger">Something went wrong...</h3>
        <p>{error}</p>
        <button className="btn btn-primary" onClick={loadData}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <table className="table table-bordered  w-75 mx-auto  mt-5">
      <thead className="table-dark text-white">
        <tr>
          <th>No</th>
          <th>name</th>
          <th>grid</th>
          <th>email</th>
          <th>course</th>
          <th>isActive</th>
          <th>mobileNumber</th>
          <th colSpan={2} className="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {Student.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.grid}</td>
            <td>{item.email}</td>
            <td>{item.course}</td>
            <td>{String(item.isActive)}</td>
            <td>{item.mobileNumber}</td>
            <td>
              <button
                className="btn btn-dark"
                onClick={() => navigate(`/edit/${item._id}`)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                onClick={() => handleDelete(item._id)}
                className="btn btn-dark"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Student;
