import React, { useEffect, useState } from "react";
import { allStudent } from "../api/student";

const Student = () => {
  const [Student, setStudent] = useState([]);
  const [loading, setLoding] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      setLoding(true);
      setError(null);

      const data = await allStudent();

      console.log("Student data", data);

      setStudent(data);
    } catch (error) {
      console.log("error", error);
      setError(error.message);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Loading data...</p>
      </div>
    );
  }

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
    <>
      <table className="table table-bordered table-striped w-75 mx-auto overflow-hidden">
        <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>grid</th>
            <th>email</th>
            <th>course</th>
            <th>isActive</th>
            <th>mobileNumber</th>
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
              <td>{item.isActive}</td>
              <td>{item.mobileNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Student;
