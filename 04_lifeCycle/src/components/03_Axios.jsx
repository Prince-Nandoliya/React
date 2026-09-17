import React, { useEffect, useState } from 'react'
import axios from "axios"

const Axios_03 = () => {
   
     const [user,setUser] = useState([])

     const[error,setError] = useState(null)
     
     const [data,setData] = useState(false)


     useEffect(() => {
        const feactUser = async() => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users")


            if(res.data.length === 0){
                setError("no user data found")
            }

            setUser(res.data)
        };

        if(data === true){
            feactUser();
        }
     },[data])

  return (
    <>
    <h1>user</h1>

    <button onClick={() => setData(true)}>user data</button>

    {error != null ? (
        <h1>{error}</h1>
    ) : (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {user.map((u) => {
                    return(
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )}


    </>
  )
}

export default Axios_03
