import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function alluser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      //   setUsers(JSON.stringify(data));
      //   console.log(data)

      setUsers(data);
    }

    alluser();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>address</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.address["city"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default FetchAPI;
