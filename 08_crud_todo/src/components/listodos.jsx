import React from 'react'

const Listodos = ({todos}) => {
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Descriptiom</th>
            </tr>
        </thead>

        <tbody>
            {todos.map((t,index)=>{
                return(
                    <tr key={t.id}>
                        <td>{index + 1}</td>
                        <td>{t.Task}</td>
                        <td>{t.Description}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default Listodos
