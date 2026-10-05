import React, { useEffect, useState } from "react";
import {allStudent} from "../api/student"

const Student = () => {
    const[Student,setStudent] = useState([])

    const loadData = async() => {
        const data = await allStudent()

    console.log("API ka pura data:", data);

        setStudent(data)
    }

    useEffect(()=>{
        loadData()

    },[])
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
            {Student.map((item,index)=>(
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
